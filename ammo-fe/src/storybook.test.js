import initStoryshots, {
    multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';

initStoryshots({
    suite: 'FileProperties',
    test: multiSnapshotWithOptions({}),
});
