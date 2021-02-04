import IScripter from 'scripters/IScripter';
import Bullet from 'shared/types/Bullet';
import { urlWithoutOrigin } from 'util/NetUtil';
import { isString, isJSON, prettifyJSON } from 'util/StringUtil';

// TODO : perfs! useMemo!
// TODO : fix line numbers
class GatlingScripter implements IScripter {
    script = (index: number, bullet: Bullet): string => {
        const varName = this.varName(index, bullet);
        const description = this._description(bullet);
        const reqHeaders = this._reqHeaders(bullet);
        const reqBody = this._reqBody(bullet);

        let result = `val ${varName} =`;
        result += `\n\texec(`;
        result += `\n\t\thttp("${description}")`;
        result += `\n\t\t.${bullet.method.toLowerCase()}("${bullet.url}")`;
        result += `\n\t\t// Request headers`;
        result += `\n\t\t${reqHeaders.join('\n\t\t')}`;

        if (reqBody) {
            result += `\n\t\t// Request body`;
            result += `\n\t\t${reqBody}`;
        }

        result += '\n';

        return result;
    };

    // ==================================================================
    // ====================== PRIVATE METHODS ===========================
    // ==================================================================

    varName = (index: number, bullet: Bullet): string => {
        const method = bullet.method.toLowerCase();
        const object = urlWithoutOrigin(bullet.url).split('/')[1];

        let result = `${method}`;
        if (object) result += `_${object}`;
        result += `_${index}`;

        return result;
    };

    _description = (bullet: Bullet): string => {
        const { method } = bullet;
        const object = urlWithoutOrigin(bullet.url).split('/')[1];

        let result = `${method}`;
        if (object) result += ` ${object}`;

        return result;
    };

    _reqHeaders = (bullet: Bullet): string[] => {
        return Object.keys(bullet.request.headers).map((headerKey) => {
            const headerValue = bullet.request.headers[headerKey];

            return `.header("${headerKey}", "${headerValue}")`;
        });
    };

    _reqBody = (bullet: Bullet): string | null => {
        if (!bullet.request.body) return null;

        const { body } = bullet.request;

        // If JSON, prettify for a nice display
        if (isString(body) && isJSON(body)) {
            return `.body(StringBody("""${prettifyJSON(
                body as string
            )}""")).asJson`;
        }

        // Else, return as is
        return `.body(StringBody("""${body}"""))`;
    };
}

export default new GatlingScripter();
