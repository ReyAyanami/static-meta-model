/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts" />

import 'reflect-metadata';
import {
  META_INFO_CONTAINER,
  PARENT_NAME_CONTAINER
} from './settings';

export function attr(target: any, key: string) {
  prop(target, key);
  if (!target[META_INFO_CONTAINER]) {
    target[META_INFO_CONTAINER] = new Map();
  }
  target[META_INFO_CONTAINER].set(key, key);
}

export function relation(target: any, key: string) {
  prop(target, key);
  var T = Reflect.getMetadata("design:type", target, key);
  if (!target[META_INFO_CONTAINER]) {
    target[META_INFO_CONTAINER] = new Map();
  }
  target[META_INFO_CONTAINER].set(key, T);
}

function prefix(parentName, value) {
  return parentName ? `${parentName}.${value}` : value
}

function prop(target: any, key: string) {

  let value = target[key];

  function getter() {
    //relation - lazy field
    if (value instanceof Function) {
      return new value(prefix(this[PARENT_NAME_CONTAINER], key));
    }
    //normal field
    return prefix(this[PARENT_NAME_CONTAINER], value);
  }

  function setter(newVal) {
    value = newVal;
  }

  if (delete target[key]) {
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}