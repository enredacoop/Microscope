Package.describe({
    name: 'microscope',
    version: '0.1.0',
    summary: 'Microscope - Forum',
    git: 'https://github.com/enredacoop/microscope',
    documentation: 'README.md'
});

Npm.depends({});

Package.on_use(function(api) {
    
    api.versionsFrom('1.0.5');

    api.use(['meteor-platform@1.2.0', 'less@1.0.11']);
    api.use(['iron:router@1.0.0'], ['client', 'server']);
    api.use(['alanning:roles@1.2.13'], ['client', 'server']);
    api.use(['fortawesome:fontawesome@4.2.0_2'], ['client']);

    api.use(['standard-app-packages']);
    api.use(['sacha:spin'], ['client']);
    api.use(['underscore']);
    api.use(['accounts-password']);
    api.use(['audit-argument-checks']);

    api.addFiles([
        './lib/permissions.js',
        './lib/router.js',
        './lib/collections/posts.js',
        './lib/collections/comments.js',
        './lib/collections/notifications.js',
        ], ['client','server']);

    api.addFiles([
        './server/fixtures.js',
        './server/publications.js',
        ],'server');

    api.addFiles([
        './client/helpers/handlebars.js',
        './client/helpers/config.js',
        './client/helpers/errors.js',
        './client/templates/notifications/notifications.js',
        './client/templates/comments/comment_item.js',
        './client/templates/comments/comment_submit.js',
        './client/templates/includes/header.js',
        './client/templates/includes/errors.js',
        './client/templates/application/layout.js',
        './client/templates/posts/post_submit.js',
        './client/templates/posts/post_page.js',
        './client/templates/posts/post_item.js',
        './client/templates/posts/post_edit.js',
        './client/templates/posts/posts_list.js',
        './client/main.js',
        ], 'client');

});
