"use strict"

const zlib = require("zlib");

exports.gzip = (scope, inst, args, data, next) => {
    data.readable = data.readable.pipe(zlib.createGzip(args.options));
    next(null, data);
};
