"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrap = void 0;
const unsound_1 = require("./unsound");
const type_traits_1 = require("./type_traits");
exports.unwrap = unsound_1.unsound.shut_up(type_traits_1.id);
