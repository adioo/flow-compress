"use strict"

const zlib = require("zlib");

exports.gzip = (scope, inst, args, data, next) => {

    if (!args.target) {
        return next(new Error('Flow-compress: No target stream defined.'));
    }

    if (!data[args.target]) {
        return next(new Error('Flow-compress: Target stream not found.'));
    }

    data[args.target || 'read'] = data[args.target].pipe(zlib.createGzip(args.options));

    next(null, data);
};
