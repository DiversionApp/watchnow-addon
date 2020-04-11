!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('rxjs'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : 'function' == typeof define && define.amd
    ? define(['ng.common', 'tslib', 'ng.forms', 'ngx-translate.core', 'rxjs', 'wako-app.mobile-sdk', 'ng.core', 'ionic.angular'], e)
    : 'object' == typeof exports
    ? (exports.plugin = e(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('rxjs'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : (t.plugin = e(
        t['ng.common'],
        t.tslib,
        t['ng.forms'],
        t['ngx-translate.core'],
        t.rxjs,
        t['wako-app.mobile-sdk'],
        t['ng.core'],
        t['ionic.angular']
      ));
})('undefined' != typeof self ? self : this, function (t, e, n, r, o, i, s, u) {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var o in t)
            n.d(
              r,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })({
    0: function (t, e, n) {
      t.exports = n('zUnb');
    },
    '0S4P': function (e, n) {
      e.exports = t;
    },
    '17wl': function (t, n) {
      t.exports = e;
    },
    '3xDq': function (t, e) {
      t.exports = n;
    },
    TGDj: function (t, e) {
      t.exports = r;
    },
    Vgaj: function (t, e) {
      t.exports = o;
    },
    doF0: function (t, e) {
      t.exports = i;
    },
    vOrQ: function (t, e) {
      t.exports = s;
    },
    z1lQ: function (t, e) {
      t.exports = u;
    },
    zUnb: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'PluginModule', function () {
          return tt;
        });
      var r = n('17wl'),
        o = n('0S4P'),
        i = n('z1lQ'),
        s = n('doF0'),
        u = n('TGDj');
      function c() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        Object(s.wakoLog)('plugin.tmdb', t);
      }
      var a = n('vOrQ'),
        p = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.translate = e), n;
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.initialize = function () {
              c('plugin initialized');
            }),
            (e.prototype.afterInstall = function () {
              c('plugin installed');
            }),
            (e.prototype.afterUpdate = function () {
              c('plugin updated');
            }),
            (e.prototype.setTranslation = function (t, e) {
              this.translate.setDefaultLang(t), this.translate.use(t), this.translate.setTranslation(t, e);
            }),
            (e.prototype.customAction = function (t, e) {}),
            (e.ɵfac = function (t) {
              return new (t || e)(a['\u0275\u0275inject'](u.TranslateService));
            }),
            (e.ɵprov = a['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })(s.PluginBaseService);
      function l(t) {
        return 'function' == typeof t;
      }
      var f = !1,
        h = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            f = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return f;
          }
        };
      function d(t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
      var b = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (h.useDeprecatedSynchronousErrorHandling) throw t;
            d(t);
          },
          complete: function () {}
        },
        y = (function () {
          return (
            Array.isArray ||
            function (t) {
              return t && 'number' == typeof t.length;
            }
          );
        })();
      function m(t) {
        return null !== t && 'object' == typeof t;
      }
      var v = (function () {
          function t(t) {
            return (
              Error.call(this),
              (this.message = t
                ? t.length +
                  ' errors occurred during unsubscription:\n' +
                  t
                    .map(function (t, e) {
                      return e + 1 + ') ' + t.toString();
                    })
                    .join('\n  ')
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = t),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        g = (function () {
          function t(t) {
            (this.closed = !1), (this._parentOrParents = null), (this._subscriptions = null), t && (this._unsubscribe = t);
          }
          return (
            (t.prototype.unsubscribe = function () {
              var e;
              if (!this.closed) {
                var n = this._parentOrParents,
                  r = this._unsubscribe,
                  o = this._subscriptions;
                if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), n instanceof t)) n.remove(this);
                else if (null !== n) for (var i = 0; i < n.length; ++i) n[i].remove(this);
                if (l(r))
                  try {
                    r.call(this);
                  } catch (c) {
                    e = c instanceof v ? _(c.errors) : [c];
                  }
                if (y(o)) {
                  i = -1;
                  for (var s = o.length; ++i < s; ) {
                    var u = o[i];
                    if (m(u))
                      try {
                        u.unsubscribe();
                      } catch (c) {
                        (e = e || []), c instanceof v ? (e = e.concat(_(c.errors))) : e.push(c);
                      }
                  }
                }
                if (e) throw new v(e);
              }
            }),
            (t.prototype.add = function (e) {
              var n = e;
              if (!e) return t.EMPTY;
              switch (typeof e) {
                case 'function':
                  n = new t(e);
                case 'object':
                  if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    var r = n;
                    (n = new t())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
              }
              var o = n._parentOrParents;
              if (null === o) n._parentOrParents = this;
              else if (o instanceof t) {
                if (o === this) return n;
                n._parentOrParents = [o, this];
              } else {
                if (-1 !== o.indexOf(this)) return n;
                o.push(this);
              }
              var i = this._subscriptions;
              return null === i ? (this._subscriptions = [n]) : i.push(n), n;
            }),
            (t.prototype.remove = function (t) {
              var e = this._subscriptions;
              if (e) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
              }
            }),
            (t.EMPTY = (function (t) {
              return (t.closed = !0), t;
            })(new t())),
            t
          );
        })();
      function _(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof v ? e.errors : e);
        }, []);
      }
      var w = (function () {
          return 'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
        })(),
        x = (function (t) {
          function e(n, r, o) {
            var i = t.call(this) || this;
            switch (
              ((i.syncErrorValue = null), (i.syncErrorThrown = !1), (i.syncErrorThrowable = !1), (i.isStopped = !1), arguments.length)
            ) {
              case 0:
                i.destination = b;
                break;
              case 1:
                if (!n) {
                  i.destination = b;
                  break;
                }
                if ('object' == typeof n) {
                  n instanceof e
                    ? ((i.syncErrorThrowable = n.syncErrorThrowable), (i.destination = n), n.add(i))
                    : ((i.syncErrorThrowable = !0), (i.destination = new S(i, n)));
                  break;
                }
              default:
                (i.syncErrorThrowable = !0), (i.destination = new S(i, n, r, o));
            }
            return i;
          }
          return (
            r.__extends(e, t),
            (e.prototype[w] = function () {
              return this;
            }),
            (e.create = function (t, n, r) {
              var o = new e(t, n, r);
              return (o.syncErrorThrowable = !1), o;
            }),
            (e.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function () {
              this.closed || ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var t = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = t),
                this
              );
            }),
            e
          );
        })(g),
        S = (function (t) {
          function e(e, n, r, o) {
            var i,
              s = t.call(this) || this;
            s._parentSubscriber = e;
            var u = s;
            return (
              l(n)
                ? (i = n)
                : n &&
                  ((i = n.next),
                  (r = n.error),
                  (o = n.complete),
                  n !== b &&
                    (l((u = Object.create(n)).unsubscribe) && s.add(u.unsubscribe.bind(u)), (u.unsubscribe = s.unsubscribe.bind(s)))),
              (s._context = u),
              (s._next = i),
              (s._error = r),
              (s._complete = o),
              s
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                h.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (e.prototype.error = function (t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber,
                  n = h.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (e.syncErrorThrowable) n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : d(t), this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  d(t);
                }
              }
            }),
            (e.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return t._complete.call(t._context);
                  };
                  h.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (e.prototype.__tryOrUnsub = function (t, e) {
              try {
                t.call(this._context, e);
              } catch (n) {
                if ((this.unsubscribe(), h.useDeprecatedSynchronousErrorHandling)) throw n;
                d(n);
              }
            }),
            (e.prototype.__tryOrSetError = function (t, e, n) {
              if (!h.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
              try {
                e.call(this._context, n);
              } catch (r) {
                return h.useDeprecatedSynchronousErrorHandling ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0) : (d(r), !0);
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null), (this._parentSubscriber = null), t.unsubscribe();
            }),
            e
          );
        })(x);
      function E(t, e) {
        return function (n) {
          if ('function' != typeof t) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return n.lift(new O(t, e));
        };
      }
      var O = (function () {
          function t(t, e) {
            (this.project = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new j(t, this.project, this.thisArg));
            }),
            t
          );
        })(),
        j = (function (t) {
          function e(e, n, r) {
            var o = t.call(this, e) || this;
            return (o.project = n), (o.count = 0), (o.thisArg = r || o), o;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.project.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(x),
        P = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, o) {
              this.destination.next(e);
            }),
            (e.prototype.notifyError = function (t, e) {
              this.destination.error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.destination.complete();
            }),
            e
          );
        })(x),
        k = (function (t) {
          function e(e, n, r) {
            var o = t.call(this) || this;
            return (o.parent = e), (o.outerValue = n), (o.outerIndex = r), (o.index = 0), o;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t, this), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(this), this.unsubscribe();
            }),
            e
          );
        })(x);
      function T() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      }
      var I = T(),
        M = (function () {
          return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
        })();
      var C = function (t) {
        if (t && 'function' == typeof t[M])
          return (
            (i = t),
            function (t) {
              var e = i[M]();
              if ('function' != typeof e.subscribe) throw new TypeError('Provided object does not correctly implement Symbol.observable');
              return e.subscribe(t);
            }
          );
        if ((e = t) && 'number' == typeof e.length && 'function' != typeof e)
          return (
            (o = t),
            function (t) {
              for (var e = 0, n = o.length; e < n && !t.closed; e++) t.next(o[e]);
              t.complete();
            }
          );
        var e;
        if (
          (function (t) {
            return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
          })(t)
        )
          return (
            (r = t),
            function (t) {
              return (
                r
                  .then(
                    function (e) {
                      t.closed || (t.next(e), t.complete());
                    },
                    function (e) {
                      return t.error(e);
                    }
                  )
                  .then(null, d),
                t
              );
            }
          );
        if (t && 'function' == typeof t[I])
          return (
            (n = t),
            function (t) {
              for (var e = n[I](); ; ) {
                var r = e.next();
                if (r.done) {
                  t.complete();
                  break;
                }
                if ((t.next(r.value), t.closed)) break;
              }
              return (
                'function' == typeof e.return &&
                  t.add(function () {
                    e.return && e.return();
                  }),
                t
              );
            }
          );
        var n,
          r,
          o,
          i,
          s = m(t) ? 'an invalid object' : "'" + t + "'";
        throw new TypeError(
          'You provided ' + s + ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
        );
      };
      function D(t) {
        return t;
      }
      function q(t) {
        return 0 === t.length
          ? D
          : 1 === t.length
          ? t[0]
          : function (e) {
              return t.reduce(function (t, e) {
                return e(t);
              }, e);
            };
      }
      var F = (function () {
        function t(t) {
          (this._isScalar = !1), t && (this._subscribe = t);
        }
        return (
          (t.prototype.lift = function (e) {
            var n = new t();
            return (n.source = this), (n.operator = e), n;
          }),
          (t.prototype.subscribe = function (t, e, n) {
            var r = this.operator,
              o = (function (t, e, n) {
                if (t) {
                  if (t instanceof x) return t;
                  if (t[w]) return t[w]();
                }
                return t || e || n ? new x(t, e, n) : new x(b);
              })(t, e, n);
            if (
              (o.add(
                r
                  ? r.call(o, this.source)
                  : this.source || (h.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable)
                  ? this._subscribe(o)
                  : this._trySubscribe(o)
              ),
              h.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && ((o.syncErrorThrowable = !1), o.syncErrorThrown))
            )
              throw o.syncErrorValue;
            return o;
          }),
          (t.prototype._trySubscribe = function (t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              h.useDeprecatedSynchronousErrorHandling && ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    var e = t.destination;
                    if (t.closed || t.isStopped) return !1;
                    t = e && e instanceof x ? e : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }),
          (t.prototype.forEach = function (t, e) {
            var n = this;
            return new (e = A(e))(function (e, r) {
              var o;
              o = n.subscribe(
                function (e) {
                  try {
                    t(e);
                  } catch (n) {
                    r(n), o && o.unsubscribe();
                  }
                },
                r,
                e
              );
            });
          }),
          (t.prototype._subscribe = function (t) {
            var e = this.source;
            return e && e.subscribe(t);
          }),
          (t.prototype[M] = function () {
            return this;
          }),
          (t.prototype.pipe = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return 0 === t.length ? this : q(t)(this);
          }),
          (t.prototype.toPromise = function (t) {
            var e = this;
            return new (t = A(t))(function (t, n) {
              var r;
              e.subscribe(
                function (t) {
                  return (r = t);
                },
                function (t) {
                  return n(t);
                },
                function () {
                  return t(r);
                }
              );
            });
          }),
          (t.create = function (e) {
            return new t(e);
          }),
          t
        );
      })();
      function A(t) {
        if ((t || (t = h.Promise || Promise), !t)) throw new Error('no Promise impl found');
        return t;
      }
      var H = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new N(t, this.project));
            }),
            t
          );
        })(),
        N = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.project = n), (r.index = 0), r;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this._innerSub(e, t, n);
            }),
            (e.prototype._innerSub = function (t, e, n) {
              var r = this.innerSubscription;
              r && r.unsubscribe();
              var o = new k(this, e, n),
                i = this.destination;
              i.add(o),
                (this.innerSubscription = (function (t, e, n, r, o) {
                  if ((void 0 === o && (o = new k(t, void 0, void 0)), !o.closed)) return e instanceof F ? e.subscribe(o) : C(e)(o);
                })(this, t, 0, 0, o)),
                this.innerSubscription !== o && i.add(this.innerSubscription);
            }),
            (e.prototype._complete = function () {
              var e = this.innerSubscription;
              (e && !e.closed) || t.prototype._complete.call(this), this.unsubscribe();
            }),
            (e.prototype._unsubscribe = function () {
              this.innerSubscription = null;
            }),
            (e.prototype.notifyComplete = function (e) {
              this.destination.remove(e), (this.innerSubscription = null), this.isStopped && t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function (t, e, n, r, o) {
              this.destination.next(e);
            }),
            e
          );
        })(P),
        U = n('Vgaj'),
        V = (function () {
          function t() {}
          return (
            (t.prototype.getNameFromId = function (t) {
              switch (t) {
                case 'apple_itunes':
                  return 'Itunes';
                case 'google_play_movies':
                  return 'Google Play';
                case 'netflix':
                  return 'Netflix';
                default:
                  return t.replace(/_/gi, ' ');
              }
            }),
            (t.prototype.getNetflixUrl = function (t) {
              return s.WakoHttpRequestService.get(t.url, null, '3d').pipe(
                E(function (e) {
                  var n = new DOMParser().parseFromString(e, 'text/html').querySelector('meta[property="al:ios:url"]');
                  return n && n.getAttribute('content')
                    ? 'http://www.netflix.com/watch/' + n.getAttribute('content').split('/').pop().split('?').shift()
                    : t.url;
                })
              );
            }),
            (t.prototype.setKnownPlatformUrl = function (t) {
              var e = this,
                n = [];
              return (
                t.forEach(function (r) {
                  n.push(
                    'netflix' === r.id
                      ? e.getNetflixUrl(t[0]).pipe(
                          E(function (t) {
                            return (r.url = t), r;
                          })
                        )
                      : Object(U.of)(r)
                  );
                }),
                Object(U.forkJoin)(n)
              );
            }),
            (t.prototype.getSources = function (t) {
              var e = this,
                n = null;
              return (
                t.movie
                  ? (n = '/movies/' + t.movie.traktId)
                  : t.show &&
                    t.episode &&
                    (n = '/shows/' + t.show.traktId + '/seasons/' + t.episode.traktSeasonNumber + '/episodes/' + t.episode.traktNumber),
                s.WakoHttpRequestService.get('https://trakt.tv' + n, null, '3d').pipe(
                  E(function (t) {
                    var n = [];
                    try {
                      new DOMParser()
                        .parseFromString(t, 'text/html')
                        .querySelectorAll('.sources a')
                        .forEach(function (t) {
                          n.push({
                            id: t.getAttribute('data-source').trim(),
                            name: e.getNameFromId(t.getAttribute('data-source').trim()),
                            country: t.getAttribute('data-country').trim(),
                            url: 'https://trakt.tv' + t.getAttribute('link').trim(),
                            logoUrl: 'https://trakt.tv' + t.querySelector('img').getAttribute('data-original')
                          });
                        });
                    } catch (r) {}
                    return n;
                  }),
                  (function t(e, n) {
                    return 'function' == typeof n
                      ? function (r) {
                          return r.pipe(
                            t(function (t, r) {
                              return ((o = e(t, r)), o instanceof F ? o : new F(C(o))).pipe(
                                E(function (e, o) {
                                  return n(t, e, r, o);
                                })
                              );
                              var o;
                            })
                          );
                        }
                      : function (t) {
                          return t.lift(new H(e));
                        };
                  })(function (t) {
                    return e.setKnownPlatformUrl(t);
                  })
                )
              );
            }),
            (t.ɵprov = a['\u0275\u0275defineInjectable']({
              token: t,
              factory: (t.ɵfac = function (e) {
                return new (e || t)();
              })
            })),
            t
          );
        })(),
        B = (function () {
          function t(t) {
            this.callback = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new z(t, this.callback));
            }),
            t
          );
        })(),
        z = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.add(new g(n)), r;
          }
          return r.__extends(e, t), e;
        })(x);
      function R(t, e) {
        1 & t && a['\u0275\u0275element'](0, 'ion-spinner');
      }
      function Q(t, e) {
        1 & t &&
          (a['\u0275\u0275elementStart'](0, 'ion-text'),
          a['\u0275\u0275text'](1),
          a['\u0275\u0275pipe'](2, 'translate'),
          a['\u0275\u0275elementEnd']()),
          2 & t && (a['\u0275\u0275advance'](1), a['\u0275\u0275textInterpolate'](a['\u0275\u0275pipeBind1'](2, 1, 'noSourceFound')));
      }
      function Y(t, e) {
        if (1 & t) {
          var n = a['\u0275\u0275getCurrentView']();
          a['\u0275\u0275elementStart'](0, 'ion-button', 3),
            a['\u0275\u0275listener']('click', function () {
              a['\u0275\u0275restoreView'](n);
              var t = e.$implicit;
              return a['\u0275\u0275nextContext']().goTo(t);
            }),
            a['\u0275\u0275text'](1),
            a['\u0275\u0275pipe'](2, 'titlecase'),
            a['\u0275\u0275elementEnd']();
        }
        if (2 & t) {
          var r = e.$implicit;
          a['\u0275\u0275classMap'](r.id),
            a['\u0275\u0275advance'](1),
            a['\u0275\u0275textInterpolate1'](' ', a['\u0275\u0275pipeBind1'](2, 4, r.name), ' ');
        }
      }
      var G = (function () {
          function t(t) {
            (this.watchnowService = t), (this.type = 'button'), (this.sources = []), (this.loading = !0);
          }
          return (
            (t.prototype.ngOnInit = function () {
              var t,
                e = this;
              this.watchnowService
                .getSources({ movie: this.movie, show: this.show, episode: this.episode })
                .pipe(
                  ((t = function () {
                    return (e.loading = !1);
                  }),
                  function (e) {
                    return e.lift(new B(t));
                  })
                )
                .subscribe(function (t) {
                  (e.sources = t), console.log({ sources: t });
                });
            }),
            (t.prototype.goTo = function (t) {
              'FirebasePlugin' in window && window.FirebasePlugin.logEvent('addon_watchnow', { type: this.type, source: t.id }),
                s.BrowserService.open(t.url, !1);
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(a['\u0275\u0275directiveInject'](V));
            }),
            (t.ɵcmp = a['\u0275\u0275defineComponent']({
              type: t,
              selectors: [['wk-open-button']],
              inputs: { movie: 'movie', show: 'show', episode: 'episode', type: 'type' },
              decls: 4,
              vars: 3,
              consts: [
                [1, 'container'],
                [4, 'ngIf'],
                ['expand', 'block', 3, 'class', 'click', 4, 'ngFor', 'ngForOf'],
                ['expand', 'block', 3, 'click']
              ],
              template: function (t, e) {
                1 & t &&
                  (a['\u0275\u0275elementStart'](0, 'div', 0),
                  a['\u0275\u0275template'](1, R, 1, 0, 'ion-spinner', 1),
                  a['\u0275\u0275template'](2, Q, 3, 3, 'ion-text', 1),
                  a['\u0275\u0275template'](3, Y, 3, 6, 'ion-button', 2),
                  a['\u0275\u0275elementEnd']()),
                  2 & t &&
                    (a['\u0275\u0275advance'](1),
                    a['\u0275\u0275property']('ngIf', e.loading),
                    a['\u0275\u0275advance'](1),
                    a['\u0275\u0275property']('ngIf', !e.loading && 0 === e.sources.length),
                    a['\u0275\u0275advance'](1),
                    a['\u0275\u0275property']('ngForOf', e.sources));
              },
              directives: [o.NgIf, o.NgForOf, i.IonSpinner, i.IonText, i.IonButton],
              pipes: [u.TranslatePipe, o.TitleCasePipe],
              styles: [
                '.container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]   .button.netflix[_ngcontent-%COMP%]{--background:#e50914}.container[_ngcontent-%COMP%]   .button.apple_itunes[_ngcontent-%COMP%]{--background:#999}.container[_ngcontent-%COMP%]   .button.google_play_movies[_ngcontent-%COMP%]{--background:#607d8b}'
              ]
            })),
            t
          );
        })(),
        K = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.setMovie = function (t) {
              this.movie = t;
            }),
            (e.ɵfac = function (t) {
              return L(t || e);
            }),
            (e.ɵcmp = a['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['ng-component']],
              features: [a['\u0275\u0275InheritDefinitionFeature']],
              decls: 1,
              vars: 1,
              consts: [[3, 'movie']],
              template: function (t, e) {
                1 & t && a['\u0275\u0275element'](0, 'wk-open-button', 0), 2 & t && a['\u0275\u0275property']('movie', e.movie);
              },
              directives: [G],
              styles: ['']
            })),
            e
          );
        })(s.MovieDetailBaseComponent),
        L = a['\u0275\u0275getInheritedFactory'](K),
        W = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.setShowEpisode = function (t, e) {
              (this.show = t), (this.episode = e);
            }),
            (e.ɵfac = function (t) {
              return $(t || e);
            }),
            (e.ɵcmp = a['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['ng-component']],
              features: [a['\u0275\u0275InheritDefinitionFeature']],
              decls: 1,
              vars: 2,
              consts: [[3, 'show', 'episode']],
              template: function (t, e) {
                1 & t && a['\u0275\u0275element'](0, 'wk-open-button', 0),
                  2 & t && a['\u0275\u0275property']('show', e.show)('episode', e.episode);
              },
              directives: [G],
              styles: ['']
            })),
            e
          );
        })(s.EpisodeDetailBaseComponent),
        $ = a['\u0275\u0275getInheritedFactory'](W),
        J = n('3xDq'),
        X = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(e, t),
            (e.prototype.setShow = function (t) {
              this.show = t;
            }),
            (e.ɵfac = function (t) {
              return Z(t || e);
            }),
            (e.ɵcmp = a['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['ng-component']],
              features: [a['\u0275\u0275InheritDefinitionFeature']],
              decls: 1,
              vars: 1,
              consts: [[3, 'show']],
              template: function (t, e) {
                1 & t && a['\u0275\u0275element'](0, 'wk-open-button', 0), 2 & t && a['\u0275\u0275property']('show', e.show);
              },
              directives: [G],
              styles: ['']
            })),
            e
          );
        })(s.ShowDetailBaseComponent),
        Z = a['\u0275\u0275getInheritedFactory'](X),
        tt = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(e, t),
            (e.pluginService = p),
            (e.movieComponent = K),
            (e.episodeComponent = W),
            (e.showComponent = X),
            (e.ɵmod = a['\u0275\u0275defineNgModule']({ type: e })),
            (e.ɵinj = a['\u0275\u0275defineInjector']({
              factory: function (t) {
                return et(t || e);
              },
              providers: [p, V],
              imports: [[o.CommonModule, J.FormsModule, i.IonicModule.forRoot(), u.TranslateModule.forRoot()]]
            })),
            e
          );
        })(s.PluginBaseModule),
        et = a['\u0275\u0275getInheritedFactory'](tt);
      e.default = tt;
    }
  });
});
