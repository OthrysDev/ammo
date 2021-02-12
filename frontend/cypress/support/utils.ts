export const isMobile = (): boolean => {
    return (
        Cypress.config('viewportWidth') <
        Cypress.env('mobileViewportWidthBreakpoint')
    );
};

// Alias that is sometimes more suited for use
export const mobile = isMobile;
