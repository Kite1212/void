! function() {
    var a = {
            8572: function(e, t, a) {
                var s = {
                    "./avatarAdvancedEventConstants.js": 1368,
                    "./avatarAssetTypeNames.js": 4489,
                    "./avatarOutfitEventConstants.js": 1383,
                    "./avatarUrlConstants.js": 6344,
                    "./experimentConstants.js": 479
                };

                function n(e) {
                    e = i(e);
                    return a(e)
                }

                function i(e) {
                    if (a.o(s, e)) return s[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                n.keys = function() {
                    return Object.keys(s)
                }, n.resolve = i, (e.exports = n).id = 8572
            },
            9237: function(e, t, a) {
                var s = {
                    "./advancedAccessoriesModalController.js": 8161,
                    "./advancedBodyColorsModalController.js": 434,
                    "./avatarController.js": 2893,
                    "./avatarItemsController.js": 9980,
                    "./avatarScaleController.js": 6993,
                    "./avatarTypeController.js": 4920,
                    "./bodyColorsController.js": 8490,
                    "./emotesModalController.js": 5696,
                    "./outfitNameModalController.js": 1393,
                    "./outfitsController.js": 412,
                    "./recentItemsController.js": 2206
                };

                function n(e) {
                    e = i(e);
                    return a(e)
                }

                function i(e) {
                    if (a.o(s, e)) return s[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                n.keys = function() {
                    return Object.keys(s)
                }, n.resolve = i, (e.exports = n).id = 9237
            },
            6213: function(e, t, a) {
                var s = {
                    "./avatarBackDirective.js": 2002,
                    "./avatarBaseDirective.js": 3877,
                    "./avatarEditorTabsDirective.js": 8127,
                    "./avatarItemCardDirective.js": 6445,
                    "./avatarItemsDirective.js": 441,
                    "./avatarScalingDirective.js": 195,
                    "./avatarTabContentDirective.js": 6889,
                    "./avatarTabContentHeaderDirective.js": 5783,
                    "./emotesItemCardDirective.js": 3730,
                    "./loadingAnimatedDirective.js": 4571,
                    "./onBlurDirective.js": 3685,
                    "./onInputFinishedDirective.js": 4778,
                    "./pageFocusDirective.js": 2587
                };

                function n(e) {
                    e = i(e);
                    return a(e)
                }

                function i(e) {
                    if (a.o(s, e)) return s[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                n.keys = function() {
                    return Object.keys(s)
                }, n.resolve = i, (e.exports = n).id = 6213
            },
            3249: function(e, t, a) {
                var s = {
                    "./orderObjectByFilter.js": 9689,
                    "./percentageFilter.js": 6477,
                    "./roundFilter.js": 280
                };

                function n(e) {
                    e = i(e);
                    return a(e)
                }

                function i(e) {
                    if (a.o(s, e)) return s[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                n.keys = function() {
                    return Object.keys(s)
                }, n.resolve = i, (e.exports = n).id = 3249
            },
            7570: function(e, t, a) {
                var s = {
                    "./avatarConstantService.js": 7458,
                    "./avatarScaleService.js": 2657,
                    "./avatarService.js": 6263,
                    "./avatarTypeService.js": 8631,
                    "./experimentationService.js": 8824
                };

                function n(e) {
                    e = i(e);
                    return a(e)
                }

                function i(e) {
                    if (a.o(s, e)) return s[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                n.keys = function() {
                    return Object.keys(s)
                }, n.resolve = i, (e.exports = n).id = 7570
            },
            4751: function(e, t, a) {
                var s = {
                    "./controllers/templates/advancedAccessoriesModal.html": 9418,
                    "./controllers/templates/advancedBodyColorsModal.html": 6974,
                    "./controllers/templates/emotesModal.html": 7674,
                    "./controllers/templates/outfitNameModal.html": 4665,
                    "./directives/templates/avatarBack.html": 5201,
                    "./directives/templates/avatarBase.html": 3594,
                    "./directives/templates/avatarEditorTabs.html": 1263,
                    "./directives/templates/avatarItemCard.html": 1427,
                    "./directives/templates/avatarItemsList.html": 6443,
                    "./directives/templates/avatarScaling.html": 1302,
                    "./directives/templates/avatarTabContent.html": 6870,
                    "./directives/templates/avatarTabContentHeader.html": 5738,
                    "./directives/templates/emotesItemCard.html": 2935,
                    "./directives/templates/loadingAnimated.html": 7278
                };

                function n(e) {
                    e = i(e);
                    return a(e)
                }

                function i(e) {
                    if (a.o(s, e)) return s[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                n.keys = function() {
                    return Object.keys(s)
                }, n.resolve = i, (e.exports = n).id = 4751
            },
            726: function(e) {
                function i(e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }

                function o(e) {
                    return e.split("/").pop().replace(".html", "")
                }
                var t = {
                    importFilesUnderPath: function(e) {
                        e.keys().forEach(e)
                    },
                    templateCacheGenerator: function(e, t, s, n) {
                        return e.module(t, []).run(["$templateCache", function(a) {
                            s && s.keys().forEach(function(e) {
                                var t = i(o(e));
                                a.put(t, s(e))
                            }), n && n.keys().forEach(function(e) {
                                var t = i(o(e));
                                a.put(t, n(e).replace(/<\/?script[^>]*>/gi, ""))
                            })
                        }])
                    }
                };
                e.exports = t
            },
            9681: function(e, t, a) {
                "use strict";
                var s = a(792),
                    n = a(5734),
                    n = a.n(n)().module("avatar", ["robloxApp", "cursorPagination", "recommendations", "modal", "thumbnails", "thumbnails3d", "toast", "infiniteScroll"]).config(["$injector", function(e) {
                        s.Lang.AvatarResources && e.get("languageResourceProvider").setLanguageKeysFromFile(s.Lang.AvatarResources)
                    }]);
                t.Z = n
            },
            1368: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    advancedEditSaveEventName: function() {
                        return s
                    },
                    advancedEditEventType: function() {
                        return n
                    }
                });
                var s = "advancedAvatarEditorSaved",
                    n = "webAvatarEditor"
            },
            4489: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);
                a.Z.constant("assetTypeLabels", {
                    2: "Label.ClassicTShirts",
                    8: "Label.Hats",
                    11: "Label.ClassicShirts",
                    12: "Label.ClassicPants",
                    17: "Label.Heads",
                    18: "Label.Faces",
                    19: "Label.Gear",
                    27: "Label.Torsos",
                    28: "Label.RightArms",
                    29: "Label.LeftArms",
                    30: "Label.LeftLegs",
                    31: "Label.RightLegs",
                    41: "Label.HairAccessories",
                    42: "Label.FaceAccessories",
                    43: "Label.NeckAccessories",
                    44: "Label.ShoulderAccessories",
                    45: "Label.FrontAccessories",
                    46: "Label.BackAccessories",
                    47: "Label.WaistAccessories",
                    48: "Label.ClimbAnimations",
                    50: "Label.FallAnimations",
                    51: "Label.IdleAnimations",
                    52: "Label.JumpAnimations",
                    53: "Label.RunAnimations",
                    54: "Label.SwimAnimations",
                    55: "Label.WalkAnimations",
                    61: "Heading.Emotes",
                    64: "Label.TShirts",
                    65: "Label.Shirts",
                    66: "Label.Pants",
                    67: "Label.Jackets",
                    68: "Label.Sweaters",
                    69: "Label.Shorts",
                    70: "Label.LeftShoes",
                    71: "Label.RightShoes",
                    72: "Label.DressesAndSkirts"
                }), a.Z.constant("avatarBodyPartIds", [27, 28, 29, 30, 31])
            },
            1383: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    outfitClickEventName: function() {
                        return s
                    },
                    outfitWearEventName: function() {
                        return n
                    },
                    outfitEventType: function() {
                        return i
                    }
                });
                var s = "clickToWearOutfit",
                    n = "wearOutfit",
                    i = "webAvatarEditor"
            },
            6344: function(e, t, a) {
                "use strict";
                a.r(t);
                var s = {
                    www: {
                        avatarThumbnail: "/avatar-thumbnail/json?width=352&height=352&format=png&userId=",
                        assetThumbnail: "/asset-thumbnail/json?width=150&height=150&format=png&assetId=",
                        outfitThumbnail: "/outfit-thumbnail/json?width=150&height=150&format=png&userOutfitId=",
                        inventoryJson: "/users/inventory/list-json",
                        outfitThumbnailJson: "/outfit-thumbnail/json",
                        catalog: "/catalog",
                        avatar: "/my/avatar"
                    },
                    avatarApi: {
                        getOutfitDetailsUrl: "/v1/outfits/{id}/details",
                        createOutfitUrl: "/v2/outfits/create",
                        deleteOutfitUrl: "/v1/outfits/{id}/delete",
                        updateOutfitUrl: "/v1/outfits/{id}/update",
                        wearOutfitUrl: "/v1/outfits/{id}/wear",
                        getOutfitsUrl: "/v1/users/{userId}/outfits",
                        patchOutfitUrl: "/v2/outfits/{id}",
                        setBodyColorsUrl: "/v1/avatar/set-body-colors",
                        setScalesUrl: "/v1/avatar/set-scales",
                        setAvatarTypeUrl: "/v1/avatar/set-player-avatar-type",
                        getAvatarUrl: "/v1/avatar",
                        getAvatarRulesUrl: "/v1/avatar-rules",
                        getRecentItemsUrl: "/v1/recent-items/{type}/list",
                        wearAssetUrl: "/v1/avatar/assets/{id}/wear",
                        removeAssetUrl: "/v1/avatar/assets/{id}/remove",
                        setWearingAssetsUrl: "/v1/avatar/set-wearing-assets",
                        setWearingAssetsUrlV2: "/v2/avatar/set-wearing-assets",
                        redrawThumbnailUrl: "/v1/avatar/redraw-thumbnail",
                        getEmotesUrl: "/v1/emotes",
                        equipEmoteUrl: "/v1/emotes/{assetId}/{position}",
                        unequipEmoteUrl: "/v1/emotes/{position}",
                        getMetaData: "/v1/avatar/metadata"
                    },
                    catalogApi: {
                        getCategories: "/v1/categories",
                        getSubcategories: "/v1/subcategories",
                        postItemDetails: "/v1/catalog/items/details"
                    },
                    inventoryApi: {
                        getInventory: "/v2/users/{userId}/inventory"
                    },
                    modals: {
                        openedClass: "modal-open-noscroll",
                        outfitName: {
                            templateUrl: "outfit-name-modal",
                            controllerName: "outfitNameModalController"
                        },
                        outfitUpdate: {
                            templateUrl: "outfit-update-modal"
                        },
                        advancedAccessories: {
                            templateUrl: "advanced-accessories-modal",
                            controllerName: "advancedAccessoriesModalController"
                        },
                        advancedBodyColor: {
                            templateUrl: "advanced-body-colors-modal",
                            controllerName: "advancedBodyColorsModalController"
                        },
                        emotes: {
                            templateUrl: "emotes-modal",
                            controllerName: "emotesModalController"
                        }
                    },
                    templates: {
                        avatarBack: "avatar-back",
                        avatarBase: "avatar-base",
                        avatarEditorTabs: "avatar-editor-tabs",
                        avatarScaling: "avatar-scaling",
                        avatarTabContentHeader: "avatar-tab-content-header",
                        avatarTabContent: "avatar-tab-content",
                        avatarItems: "avatar-items-list",
                        avatarItemCard: "avatar-item-card",
                        emotesItemCard: "emotes-item-card",
                        recommendedItems: "recommended-items"
                    }
                };
                a(9681).Z.constant("avatarUrlConstants", s), t.default = s
            },
            479: function(e, t, a) {
                "use strict";
                a.r(t);
                var s = a(792),
                    n = s.EnvironmentUrls.apiGatewayUrl,
                    s = {
                        getExperimentationValues: function(e, t, a) {
                            return {
                                url: "".concat(n, "/product-experimentation-platform/v1/projects/").concat(e, "/layers/").concat(t, "/values?parameters=").concat(a.join(",")),
                                withCredentials: !0,
                                timeout: 2e3
                            }
                        }
                    };
                t.default = {
                    url: s,
                    parameterNames: {},
                    layerNames: {
                        avatarShopPage: "AvatarMarketplace.UI"
                    },
                    defaultProjectId: 1
                }
            },
            8161: function(e, t, a) {
                "use strict";
                a.r(t);
                a(792);
                a = a(9681);

                function s(e, t, a) {
                    e.params = a, e.submit = function() {
                        t.close()
                    }, e.close = function() {
                        t.dismiss()
                    }
                }
                s.$inject = ["$scope", "$uibModalInstance", "modalData"], a.Z.controller("advancedAccessoriesModalController", s), t.default = s
            },
            434: function(e, t, a) {
                "use strict";
                a.r(t);
                a(792);
                a = a(9681);

                function s(e, t, a) {
                    e.params = a, e.submit = function() {
                        t.close()
                    }, e.close = function() {
                        t.dismiss()
                    }
                }
                s.$inject = ["$scope", "$uibModalInstance", "modalData"], a.Z.controller("advancedBodyColorsModalController", s), t.default = s
            },
            2893: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    default: function() {
                        return m
                    }
                });
                var t = a(5734),
                    oe = a.n(t),
                    re = a(792),
                    s = 216 / 24389,
                    n = 24389 / 27,
                    i = {
                        X: 95.047,
                        Y: 100,
                        Z: 108.883
                    };

                function g(e) {
                    return e * (Math.PI / 180)
                }

                function o(e) {
                    var t, a, a = (a = r((t = e).R / 255), e = r(t.G / 255), t = r(t.B / 255), {
                        X: .4124 * a + .3576 * e + .1805 * t,
                        Y: .2126 * a + .7152 * e + .0722 * t,
                        Z: .0193 * a + .1192 * e + .9505 * t
                    });
                    return t = l((e = a).X / i.X), a = l(e.Y / i.Y), e = l(e.Z / i.Z), {
                        L: Math.max(0, 116 * a - 16),
                        A: 500 * (t - a),
                        B: 200 * (a - e)
                    }
                }

                function r(e) {
                    return .04045 < e ? 100 * Math.pow((e + .055) / 1.055, 2.4) : e / 12.92 * 100
                }

                function l(e) {
                    return s < e ? Math.pow(e, 1 / 3) : n * e + 16 / 116
                }
                var le = {
                        DeltaE: function(e, t) {
                            return function(e, t) {
                                var a, s, n = g(360),
                                    i = g(180),
                                    o = Math.pow(25, 7),
                                    r = Math.sqrt(e.A * e.A + e.B * e.B),
                                    l = Math.sqrt(t.A * t.A + t.B * t.B),
                                    c = (r + l) / 2,
                                    d = .5 * (1 - Math.sqrt(Math.pow(c, 7) / (Math.pow(c, 7) + o))),
                                    u = (1 + d) * e.A,
                                    r = (1 + d) * t.A,
                                    l = Math.sqrt(u * u + e.B * e.B),
                                    c = Math.sqrt(r * r + t.B * t.B);
                                0 === e.B && 0 == u ? a = 0 : (a = Math.atan2(e.B, u)) < 0 && (a += n);
                                0 === t.B && 0 == r ? s = 0 : (s = Math.atan2(t.B, r)) < 0 && (s += n);
                                var m, d = t.L - e.L,
                                    u = c - l,
                                    r = l * c;
                                0 == r ? m = 0 : (m = s - a) < -i ? m += n : i < m && (m -= n);
                                m = 2 * Math.sqrt(r) * Math.sin(m / 2);
                                e = (e.L + t.L) / 2, t = (l + c) / 2, c = a + s;
                                i = l * l == 0 ? c : Math.abs(a - s) <= i ? c / 2 : c < n ? (c + n) / 2 : (c - n) / 2;
                                c = 1 - .17 * Math.cos(i - g(30)) + .24 * Math.cos(2 * i) + .32 * Math.cos(3 * i + g(6)) - .2 * Math.cos(4 * i - g(63)), n = g(30) * Math.exp(-Math.pow((i - g(275)) / g(25), 2)), i = 2 * Math.sqrt(Math.pow(t, 7) / (Math.pow(t, 7) + o)), o = 1 + .015 * Math.pow(e - 50, 2) / Math.sqrt(20 + Math.pow(e - 50, 2)), e = 1 + .045 * t, c = 1 + .015 * t * c, i = -Math.sin(2 * n) * i;
                                return Math.sqrt(Math.pow(d / o, 2) + Math.pow(u / e, 2) + Math.pow(m / c, 2) + u / e * i * (m / c))
                            }(o(e), o(t))
                        }
                    },
                    t = a(9681),
                    ce = a(1383),
                    c = a(1368);

                function de(e, t, a) {
                    re.EventStream && re.EventStream.SendEventWithTarget(c.advancedEditSaveEventName, c.advancedEditEventType, {
                        assetIds: e,
                        accessoryPage: t,
                        success: a
                    }, re.EventStream.TargetTypes.WWW)
                }
                a(479);

                function ue(e, t) {
                    var a;
                    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (a = function(e, t) {
                                if (!e) return;
                                if ("string" == typeof e) return d(e, t);
                                var a = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === a && e.constructor && (a = e.constructor.name);
                                if ("Map" === a || "Set" === a) return Array.from(e);
                                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return d(e, t)
                            }(e)) || t && e && "number" == typeof e.length) {
                            a && (e = a);
                            var s = 0,
                                t = function() {};
                            return {
                                s: t,
                                n: function() {
                                    return s >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[s++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: t
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var n, i = !0,
                        o = !1;
                    return {
                        s: function() {
                            a = e[Symbol.iterator]()
                        },
                        n: function() {
                            var e = a.next();
                            return i = e.done, e
                        },
                        e: function(e) {
                            o = !0, n = e
                        },
                        f: function() {
                            try {
                                i || null == a.return || a.return()
                            } finally {
                                if (o) throw n
                            }
                        }
                    }
                }

                function d(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                    return s
                }

                function u(c, d, t, i, e, u, m, g, a, s, r, n, b, v, o, l, p, f, y, h, C, A) {
                    var L = l;
                    d.debug("avatarController starting"), c.pageLoaded = !1, c.bundlesEnabledForUser = !1, c.emotesEnabledForUser = !1;
                    var T = m.outfits.outfitMessages;
                    c.selectedCategory = null, c.selectedSubcategory = null, c.categoryDict = {}, c.subcategoryDict = {};
                    var M = "Roblox.PresetCostumes.InitialDelay";
                    c.createUrl = "/develop?directLink=1&view=", c.shirtId, c.tShirtId, c.pantsId, c.avatarCallLimiter = {}, c.systemFeedback = {
                        error: function(e, t) {
                            void 0 === t && (t = 2e3), re.BootstrapWidgets.ToggleSystemMessage($(".alert-warning"), 100, t, e)
                        },
                        loading: function(e) {
                            re.BootstrapWidgets.ToggleSystemMessage($(".alert-loading"), 100, 2e3, e)
                        },
                        success: function(e) {
                            re.BootstrapWidgets.ToggleSystemMessage($(".alert-success"), 100, 2e3, e)
                        },
                        info: function(e) {
                            re.BootstrapWidgets.ToggleSystemMessage($(".alert-info"), 100, 2e3, e)
                        }
                    }, c.isThumbnailLoading = !1, c.refreshThumbnail = function() {
                        return c.isThumbnailLoading = !0, f.reloadThumbnailImage(y.thumbnailTypes.avatar, c.avatarDataModel.userId, y.thumbnailAvatarsSize.size352).finally(function() {
                            c.isThumbnailLoading = !1
                        })
                    }, c.redrawFloodchecked = !1, c.redrawThumbnail = function() {
                        u.redrawThumbnail().then(function() {
                            c.refreshThumbnail()
                        }, function(e) {
                            e && e.errors && e.errors[0] && 1 === e.errors[0].code ? (c.systemFeedback.error(m.thumbnail.redrawFloodchecked), d.debug("Disabled redraw button"), c.redrawFloodchecked = !0, t(function() {
                                d.debug("Re-enabled redraw"), c.redrawFloodchecked = !1
                            }, 1e3 * m.thumbnail.waitForThumbnailRegenerationInSeconds)) : c.systemFeedback.error(m.thumbnail.redrawThumbnailFailed)
                        })
                    }, c.threeDToggleData = {
                        is3d: !1,
                        avatarToggleButton: m.thumbnail.threeDeeButton
                    };

                    function S() {
                        c.threeDToggleData.avatarToggleButton = c.threeDToggleData.is3d ? m.thumbnail.twoDeeButton : m.thumbnail.threeDeeButton
                    }
                    c.toggleThreeDee = function() {
                        c.threeDToggleData.is3d = !c.threeDToggleData.is3d, h.setLocalStorage(m.thumbnail.useThreeDeeThumbsKey, c.threeDToggleData.is3d), S()
                    };
                    c.threeDToggleData.is3d = h.getLocalStorage(m.thumbnail.useThreeDeeThumbsKey), S();
                    var k = null,
                        I = null;

                    function E() {
                        var e = u.getAvatar();
                        return e.then(function(e) {
                            c.loadAvatarDetailsSuccessCallBack(e)
                        }), e
                    }
                    c.loadAvatarDetailsSuccessCallBack = function(e) {
                        d.debug("Retrieved avatar details"), q((I = e).assets), Z(), c.avatarDataModel.avatarType = e.playerAvatarType, c.$broadcast(m.events.avatarDetailsLoaded, I)
                    }, c.loadRulesSuccessCallBack = function(e) {
                        d.debug("Retrieved avatar rules"), k = e, c.bundlesEnabledForUser = k.bundlesEnabledForUser, c.emotesEnabledForUser = k.emotesEnabledForUser, T = c.bundlesEnabledForUser ? m.outfits.costumeMessages : m.outfits.outfitMessages, c.$broadcast(m.events.avatarRulesLoaded, k);
                        k.wearableAssetTypes.push({
                            id: 32,
                            name: "Package",
                            maxCount: 0
                        }), c.emotesEnabledForUser && p.setAssetTypeLookups(k.wearableAssetTypes)
                    }, c.getAssetTypeName = function(e) {
                        return re.AvatarAccoutrementService.getAssetTypeNameById(e)
                    }, c.getAssetTypeByName = function(e) {
                        return re.AvatarAccoutrementService.getAssetTypeByName(e)
                    };

                    function D(t) {
                        return function(e) {
                            e = e.duration;
                            return re.ThumbnailMetrics && re.ThumbnailMetrics.logFinalThumbnailTime(e, t)
                        }
                    }

                    function w(e) {
                        return function() {
                            return re.ThumbnailMetrics && re.ThumbnailMetrics.logThumbnailTimeout(e)
                        }
                    }

                    function x(e) {
                        d.debug("Retrieved avatar rules and details and metaData");
                        var t, a = e[0],
                            s = e[1],
                            n = e[2],
                            i = e[3];
                        c.buildAvatarDataModel(n, i), c.loadRulesSuccessCallBack(a), t = c.getAssetTypeByName("Shirt"), e = c.getAssetTypeByName("T-Shirt"), i = c.getAssetTypeByName("Pants"), c.shirtId = null !== t ? t.id : "", c.tShirtId = null !== e ? e.id : "", c.pantsId = null !== i ? i.id : "", c.initializePage(), c.loadAvatarDetailsSuccessCallBack(s), c.avatarLibrary = {
                            avatarRules: a,
                            avatarDetails: s,
                            metaData: n
                        }, c.pageLoaded = !0, re.ThumbnailView.setupDelayedThumbnailHolders(), c.$broadcast(m.events.pageLoaded, {
                            avatarRules: a,
                            avatarDetails: s,
                            metaData: n
                        }), c.avatarLibrary.metaData.isCategoryReorgEnabled ? (document.getElementsByClassName("content")[0].classList.add("six-column"), c.avatarLibrary.metaData.isLCCompletelyEnabled ? c.tabs = m.tabsLayeredClothingCategories : c.avatarLibrary.metaData.LCEnabledInEditorAndCatalog ? c.tabs = m.tabsLayeredClothingUI : c.tabs = m.tabs) : document.getElementsByClassName("content")[0].classList.add("five-column")
                    }

                    function O() {
                        c.initializeAvatarThumbnail()
                    }

                    function P() {
                        var e = u.getRules(),
                            t = u.getAvatar(),
                            a = u.getMetaData();
                        a.then(re.ThumbnailView.setupDelayedThumbnailHolders());
                        a = [e, t, a, O()];
                        c.systemFeedback.error(m.page.errorLoadingPage, 6e4), i.all(a).then(x)
                    }

                    function F() {
                        return c.tabWithOpenMenu && c.tabWithOpenMenu.active
                    }

                    function R(e) {
                        var t = !1;
                        if (e && e.errors)
                            for (var a = 0; a < e.errors.length; a++) e.errors[a].code === m.outfits.outfitErrorCodes.invalidOutfitName && (t = !0);
                        return t
                    }

                    function B() {
                        var e = c.selectedMenu;
                        c.showAdvancedAccessoriesLink = e && e.assetType && re.AvatarAccoutrementService.isAccessoryType(e.assetType)
                    }

                    function U(e, s, n) {
                        var t, t = (t = {
                            titleText: (t = m.modalLayout.advancedAccessoriesDoubleCheck).title,
                            bodyText: t.bodyText,
                            actionButtonShow: !0,
                            actionButtonText: t.confirmBtnName,
                            neutralButtonText: t.cancelBtnName
                        }, v.open(t).result);
                        d.debug(t), t.then(function() {
                            d.debug("Confirmed double check modal");
                            var t = [];
                            oe().forEach(s, function(e) {
                                "" !== e.id && t.push(e.id)
                            }), oe().forEach(e, function(e) {
                                t.push(e.id)
                            });
                            var a = [];
                            t.forEach(function(e) {
                                e = {
                                    assetId: e
                                };
                                a.push(e)
                            }), u.postItemDetails(a, "Asset").then(function(e) {
                                e = e.data;
                                c.validateAdvancedAccessories(e) && z(t, !0).then(function(e) {
                                    var a;
                                    e && e.invalidAssetIds && 0 < e.invalidAssetIds.length ? (a = e.invalidAssetIds, d.debug(a), oe().forEach(s, function(e) {
                                        d.debug(e);
                                        var t = "" === e.id || -1 === a.indexOf(parseInt(e.id));
                                        e.valid = t
                                    }), de(t, c.selectedMenu.assetType, !1), r.fireEvent(m.googleAnalytics.category, m.googleAnalytics.advancedAccessoriesAction, m.googleAnalytics.saveFailedLabel)) : (c.systemFeedback.success(m.assets.savedAdvancedAccessories), d.debug("Successfully saved advanced assets"), n(), de(t, c.selectedMenu.assetType, !0), r.fireEvent(m.googleAnalytics.category, m.googleAnalytics.advancedAccessoriesAction, m.googleAnalytics.saveLabel))
                                }, function() {
                                    c.systemFeedback.error(m.assets.errorUpdatingItems), de(t, c.selectedMenu.assetType, !1)
                                })
                            }, function() {
                                c.systemFeedback.error(m.assets.errorUpdatingItems)
                            })
                        }, function() {
                            d.debug("Cancelled double check modal")
                        })
                    }
                    c.initializeAvatarThumbnail = function() {
                        c.avatarDataModel.thumbnailCacheKey = "", c.avatarDataModel.thumbnailType = y.thumbnailTypes.avatar, c.avatarDataModel.thumbnailOptions = {
                            size: y.thumbnailAvatarsSize.size352
                        }, c.avatarDataModel.on2dAvatarSuccess = D("2dThumbnailOnLoad"), c.avatarDataModel.on3dAvatarSuccess = D("3dThumbnail"), c.avatarDataModel.on2dAvatarFailure = w("2dThumbnailOnLoad"), c.avatarDataModel.on3dAvatarFailure = w("3dThumbnail")
                    }, c.initializePage = function() {
                        !0 === c.avatarDataModel.isAvatarScaleEmbeddedInTab && oe().forEach(c.tabs, function(e) {
                            "Body" === e.name && oe().forEach(e.categoryRows, function(e) {
                                "Appearance" === e.name && oe().forEach(e.subCategoryMenu, function(e) {
                                    "Scale" === e.name && (e.visible = !0)
                                })
                            })
                        }), c.emotesEnabledForUser && oe().forEach(c.tabs, function(e) {
                            "AvatarAnimations" === e.name && oe().forEach(e.subCategoryMenu, function(e) {
                                "Emote" === e.name && (e.visible = !0)
                            })
                        }), !0 === c.bundlesEnabledForUser && oe().forEach(c.tabs, function(e) {
                            "Outfits" === e.name && (e.visible = !1), "Costumes" === e.name && (e.visible = !0), "Recent" === e.name && oe().forEach(e.subCategoryMenu, function(e) {
                                "Outfits" === e.name && (e.label = L.get("Label.Costume"))
                            }), "Body" === e.name && oe().forEach(e.categoryRows, function(e) {
                                "Packages" === e.name && (e.visible = !1)
                            })
                        })
                    }, c.buildAvatarDataModel = function(e, t) {
                        oe().extend(c.avatarDataModel, e), c.avatarDataModel.userId = re.CurrentUser.userId, c.avatarDataModel.catalogPageUrl = n.getAbsoluteUrl("/catalog"), c.avatarDataModel.avatarType = m.avatarType.defaultOnPageLoad
                    }, c.loadAvatarPage = function() {
                        var e = u.getRules(),
                            t = u.getAvatar(!1),
                            a = u.getMetaData(!1);
                        c.avatarDataModel = {
                            userId: re.CurrentUser.userId,
                            scaleEnabled: !1,
                            avatarType: m.avatarType.defaultOnPageLoad
                        }, ne(), se(), a.then(re.ThumbnailView.setupDelayedThumbnailHolders()), i.all([e, t, a, O()]).then(x, P)
                    }, c.tabs = m.tabs, c.selectedTab = null, c.selectedMenu = null, c.selectedCategory = null, c.selectedSubcategory = null, c.tabWithOpenMenu = null, c.isMenuOpen = !1, c.mouseLeftTabMenu = function() {
                        F() || (c.tabWithOpenMenu = null, c.isMenuOpen = !1)
                    }, c.onTabBlur = function(e) {
                        c.tabWithOpenMenu = null, c.isMenuOpen = !1
                    }, c.onTabClick = function(e) {
                        if (e.noSubCategoryMenu) c.onMenuClick(e, null);
                        else {
                            if (F()) return c.tabWithOpenMenu === e ? (c.tabWithOpenMenu = null, c.isMenuOpen = !1, void(e.active = !1)) : (c.tabWithOpenMenu.active = !1, c.tabWithOpenMenu = e, c.isMenuOpen = !0, void(e.active = !0));
                            c.isMenuOpen = !0, (c.tabWithOpenMenu = e).active = !0
                        }
                    }, c.onRowClick = function(e) {
                        c.selectedMenu = null, c.selectedRow = e, c.$broadcast(m.events.submenuClicked, {
                            category: e
                        })
                    }, c.onRowDropdownClick = function(e, t) {
                        c.isMenuOpen = !1, c.tabWithOpenMenu = null, c.selectedTab = t, c.selectedRow = e, c.selectedMenu = null, c.$broadcast(m.events.submenuClicked, {
                            category: e
                        })
                    }, c.onTabHover = function(e) {
                        F() || (c.tabWithOpenMenu = e, c.isMenuOpen = !0)
                    }, c.scrollToTop = function() {
                        oe().element("#wrap").hasClass("pinned") && s("tab-content-top")
                    }, c.onMenuClick = function(e, t, a) {
                        var s;
                        c.isMenuOpen = !1, c.tabWithOpenMenu = null, c.selectedRow = null, c.selectedTab = e, null !== (c.selectedMenu = t) && "PresetCostumes" === t.name ? (s = M, o.localStorage && "true" === o.localStorage.getItem(s) || (c.displayPresetCostumeDelayMessage = !0, s = M, o.localStorage && o.localStorage.setItem(s, "true"))) : c.displayPresetCostumeDelayMessage = !1, c.selectedCategory = (null != a ? a : e).name, c.selectedSubcategory = null === t ? "" : t.name, c.selectedRow = null !== a ? a : null, c.scrollToTop(), B(), c.$broadcast(m.events.menuClicked, {
                            tab: e,
                            menu: t
                        }), r.viewVirtual("".concat(g.www.avatar, "/").concat(e.name).concat(null === t ? "" : "/".concat(t.name)))
                    }, c.openOutfitMenu = function(e) {
                        e.active = !0
                    }, c.closeOutfitMenu = function(e) {
                        e.active && (e.active = !1)
                    }, c.onItemMenuButtonClicked = function(e, t, a) {
                        switch (t.active = !1, a.name) {
                            case "Delete":
                                o = t, r = m.modalLayout.outfitDelete, l = c.bundlesEnabledForUser ? L.get("Label.Costume") : L.get("Label.Outfit"), r = {
                                    titleText: r.titlePrefix(l),
                                    bodyText: r.bodyText(l),
                                    actionButtonShow: !0,
                                    actionButtonText: r.confirmBtnName,
                                    neutralButtonText: r.cancelBtnName,
                                    actionButtonId: r.confirmBtnId
                                }, v.open(r).result.then(function(e) {
                                    var t;
                                    t = o, d.debug("User clicked delete outfit"), u.deleteOutfit(t.id).then(function() {
                                        c.$broadcast(m.events.outfitDeleted, t), c.systemFeedback.success(T.successfulDelete)
                                    }, function() {
                                        c.systemFeedback.error(T.errorDeletingOutfit)
                                    })
                                });
                                break;
                            case "Update":
                                n = t, i = m.modalLayout.outfitUpdate, r = c.bundlesEnabledForUser ? L.get("Label.Costume") : L.get("Label.Outfit"), i = {
                                    titleText: i.titlePrefix(r),
                                    bodyText: i.bodyText(r),
                                    actionButtonShow: !0,
                                    actionButtonText: i.confirmBtnName,
                                    neutralButtonText: i.cancelBtnName,
                                    actionButtonId: i.confirmBtnId
                                }, v.open(i).result.then(function(e) {
                                    var a;
                                    a = n, d.debug("User clicked update outfit"), E().then(function() {
                                        var e = I.bodyColors,
                                            t = I.scales,
                                            t = {
                                                bodyColors: e,
                                                assets: j(I.assets),
                                                scale: t
                                            };
                                        u.patchOutfit(a.id, t).then(function() {
                                            d.debug("Updated outfit"), c.systemFeedback.success(T.successfulUpdate), c.addItemThumbnailAndLink(a)
                                        }, function(e) {
                                            e && e.errors && e.errors[0] && 1 === e.errors[0].code ? c.systemFeedback.error(T.updateFailedOutfitDeleted) : c.systemFeedback.error(T.errorUpdatingOutfit)
                                        })
                                    })
                                });
                                break;
                            case "Rename":
                                s = t, i = {
                                    animation: !1,
                                    templateUrl: g.modals.outfitName.templateUrl,
                                    controller: g.modals.outfitName.controllerName,
                                    openedClass: g.modals.openedClass,
                                    resolve: {
                                        modalData: {
                                            title: T.renameOutfitTitle,
                                            description: T.renameOutfitDescription,
                                            buttonName: T.renameOutfitButton,
                                            nameInputPlaceholder: T.nameInputPlaceholder
                                        }
                                    }
                                }, b.open(i).result.then(function(e) {
                                    ! function(t, a) {
                                        d.debug("User clicked rename outfit");
                                        var e = {
                                            name: a
                                        };
                                        u.patchOutfit(t.id, e).then(function(e) {
                                            e && e.name ? t.name = e.name : t.name = a, c.systemFeedback.success(T.successfulRename)
                                        }, function(e) {
                                            R(e) ? c.systemFeedback.error(T.invalidOutfitName) : c.systemFeedback.error(T.errorRenamingOutfit)
                                        })
                                    }(s, e.outfitName)
                                })
                        }
                        var s, n, i, o, r, l
                    }, c.openEmotesModal = function(e) {
                        e = {
                            animation: !1,
                            templateUrl: g.modals.emotes.templateUrl,
                            controller: g.modals.emotes.controllerName,
                            openedClass: "",
                            size: "md",
                            windowClass: "emotes-modal",
                            resolve: {
                                modalData: {
                                    assetTypeInfo: p.getAssetTypeByName([m.emotes.assetType]),
                                    isMenuOpen: c.isMenuOpen,
                                    selectedTab: c.selectedTab,
                                    selectedMenu: c.selectedMenu,
                                    selectedCategory: c.selectedCategory,
                                    selectedSubcategory: c.selectedSubcategory,
                                    addItemThumbnailAndLink: c.addItemThumbnailAndLink,
                                    systemFeedback: c.systemFeedback,
                                    selectedItem: e
                                }
                            }
                        };
                        b.open(e).result.then(function(e) {})
                    }, c.outfitMenuOptions = m.outfits.menuOptions, c.createOutfitClicked = function() {
                        var e;
                        e = {
                            animation: !1,
                            templateUrl: g.modals.outfitName.templateUrl,
                            controller: g.modals.outfitName.controllerName,
                            openedClass: g.modals.openedClass,
                            resolve: {
                                modalData: {
                                    title: T.createOutfitTitle,
                                    description: T.createOutfitDescription,
                                    buttonName: T.createOutfitButton,
                                    nameInputPlaceholder: T.nameInputPlaceholder
                                }
                            }
                        }, b.open(e).result.then(function(e) {
                            var s, e = e.outfitName;
                            s = e, d.debug("User clicked create outfit"), E().then(function() {
                                var e = I.bodyColors,
                                    t = I.scales,
                                    a = j(I.assets);
                                u.createOutfit(s, e, a, t).then(function() {
                                    c.$broadcast(m.events.outfitsChanged, null), c.systemFeedback.success(T.successfulCreate)
                                }, function(e) {
                                    c.$broadcast(m.events.outfitsChanged, null), e && e.errors && e.errors[0] && e.errors[0].code === m.outfits.outfitErrorCodes.maxOutfits ? c.systemFeedback.error(T.maxNumberOfOutfits) : R(e) ? c.systemFeedback.error(T.invalidOutfitName) : c.systemFeedback.error(T.errorCreatingOutfit)
                                })
                            })
                        })
                    }, c.isAssetTypeSelectionEnabled = function(e) {
                        return !re.AvatarAccoutrementService.isEmote(e)
                    }, c.showAdvancedAccessoriesLink = !0, c.validateAdvancedAccessories = function(e) {
                        if (!c.avatarLibrary.metaData.LCEnabledInEditorAndCatalog) return !0;
                        var t = {},
                            a = ue(e);
                        try {
                            for (a.s(); !(s = a.n()).done;) {
                                var s = s.value.assetType;
                                if (void 0 !== re.AvatarAccoutrementService.getAdvancedAccessoryLimit(s)) {
                                    if (void 0 === t[s] && (t[s] = 0), t[s]++, t[s] > re.AvatarAccoutrementService.getAdvancedAccessoryLimit(s)) return c.systemFeedback.error(m.advancedEditor.overLimitAdvancedEditorAssetType(re.AvatarAccoutrementService.getAdvancedAccessoryLimit(s), C[s])), !1
                                } else if (re.AvatarAccoutrementService.isLayeredClothing(s)) return c.systemFeedback.error(m.advancedEditor.unsupportedAdvancedEditorAssetType(C[s])), !1
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        return !0
                    }, c.openAdvancedAccessories = function() {
                        var e = g.modals.advancedAccessories.templateUrl,
                            t = [],
                            a = [];
                        oe().forEach(N, function(e) {
                            re.AvatarAccoutrementService.isAccessoryType(e.assetType.name) ? t.push({
                                id: e.id,
                                valid: !0
                            }) : a.push(e)
                        });
                        for (var s = 0; s < 10; s++) void 0 === t[s] && (t[s] = {
                            id: "",
                            valid: !0
                        });
                        var n = /catalog\/(\d+)/i,
                            i = /^\d+$/i;
                        var o = {
                                advancedAccessorySlots: t,
                                onChange: function(e) {
                                    var t, t = (t = e.id, null !== (t = n.exec(t)) && t[1] ? t[1] : null);
                                    null !== t && (e.id = t), e.valid = "" === e.id || (e = e.id, null !== i.exec(e))
                                },
                                onSaveClick: function(e) {
                                    d.debug("submitFunc", e), U(a, t, e)
                                }
                            },
                            o = {
                                animation: !1,
                                templateUrl: e,
                                controller: g.modals.advancedAccessories.controllerName,
                                openedClass: g.modals.openedClass,
                                resolve: {
                                    modalData: o
                                }
                            };
                        b.open(o).result.then(function() {
                            d.debug("User clicked save assets in advanced view")
                        }, function() {
                            d.debug("User cancelled out of assets advanced view"), r.fireEvent(m.googleAnalytics.category, m.googleAnalytics.advancedAccessoriesAction, m.googleAnalytics.closeLabel)
                        }), r.fireEvent(m.googleAnalytics.category, m.googleAnalytics.advancedAccessoriesAction, m.googleAnalytics.openLabel)
                    }, c.onItemClicked = function(e, t) {
                        if (t.preventDefault(), "Outfit" === e.type) c.avatarLibrary.metaData.isOutfitHandlingOnFrontendEnabled ? (function(e) {
                            re.EventStream && re.EventStream.SendEventWithTarget(ce.outfitClickEventName, ce.outfitEventType, {
                                userOutfitId: e
                            }, re.EventStream.TargetTypes.WWW)
                        }((n = e).id), u.getOutfitDetails(n.id).then(function(e) {
                            var t = [],
                                a = {};
                            e.isEditable || G(e) || (t = N.slice()), e.assets.forEach(function(e) {
                                a[e.assetType.id] ? a[e.assetType.id]++ : a[e.assetType.id] = 1, t = re.AvatarAccoutrementService.addAssetToAvatar(e, t, 1 === a[e.assetType.id], !0), J = !re.AvatarAccoutrementService.isAnimation(e.assetType.name)
                            });
                            e = [_(t), e.isEditable ? u.setBodyColors(e.bodyColors) : null, function(e) {
                                if (e.isEditable) return !0;
                                return G(e)
                            }(e) ? u.setScales(e.scale) : null];
                            i.all(e).then(function(e) {
                                var t, a = !0,
                                    s = 0;
                                e.forEach(function(e) {
                                    e && (e.invalidAssetIds && (s = e.invalidAssetIds.length), a = a && e.success)
                                }), c.refreshThumbnail(), c.$broadcast(m.events.avatarDetailsLoaded, I), t = n.id, e = a, re.EventStream && re.EventStream.SendEventWithTarget(ce.outfitWearEventName, ce.outfitEventType, {
                                    userOutfitId: t,
                                    success: e
                                }, re.EventStream.TargetTypes.WWW), a ? c.systemFeedback.success(T.successfulWear) : 0 < s ? (e = m.outfits.missingItemsFromOutfit(s.toString()), c.systemFeedback.error(e)) : c.systemFeedback.error(T.errorWearingOutfit)
                            }, function() {
                                c.systemFeedback.error(T.errorWearingOutfit)
                            })
                        }, function() {
                            c.systemFeedback.error(T.errorWearingOutfit)
                        })) : (s = e, u.wearOutfit(s.id).then(function(e) {
                            c.refreshThumbnail(), E(), e && e.invalidAssetIds && 0 < e.invalidAssetIds.length ? (e = e.invalidAssetIds.length, e = m.outfits.missingItemsFromOutfit(e.toString()), c.systemFeedback.error(e)) : c.systemFeedback.success(T.successfulWear)
                        }, function() {
                            c.systemFeedback.error(T.errorWearingOutfit)
                        }));
                        else if ("Asset" === e.type) {
                            if (c.emotesEnabledForUser) {
                                s = p.getAssetTypeByName(["Emote Animation"]);
                                if (null !== e.assetType && null !== s && e.assetType.id === s.id) return void c.openEmotesModal(e)
                            }
                            if ("Package" === e.assetType.name) return a = e, void u.wearAsset(a.id).then(function(e) {
                                c.refreshThumbnail(), E(), e && e.invalidAssetIds && 0 < e.invalidAssetIds.length && (e = e.invalidAssetIds.length, e = m.outfits.missingItemsFromOutfit(e.toString()), c.systemFeedback.error(e))
                            }, function() {
                                c.systemFeedback.error(m.packages.errorWearingPackage)
                            });
                            e.selected ? (e.selected = !1, V(e)) : (e.selected = !0, a = e, e = re.AvatarAccoutrementService.addAssetToAvatar(a, N), J = !re.AvatarAccoutrementService.isAnimation(a.assetType.name), _(e))
                        }
                        var a, s, n
                    }, c.addItemThumbnailAndLink = function(e) {
                        switch (e.thumbnail = {
                                Final: !1,
                                Url: ""
                            }, e.type) {
                            case "Asset":
                                e.thumbnailType = y.thumbnailTypes.assetThumbnail, e.link = re.Endpoints.getCatalogItemUrl(e.id, e.name);
                                break;
                            case "Outfit":
                                e.thumbnailType = y.thumbnailTypes.userOutfit
                        }
                    }, c.hatSlots = [], c.onHatSlotClicked = function(e) {
                        V(e)
                    };
                    var N = [],
                        H = [];

                    function W(e) {
                        var t = [];
                        return oe().forEach(e, function(e) {
                            t.push(e.id)
                        }), t
                    }

                    function j(e) {
                        var a = [];
                        return oe().forEach(e, function(e) {
                            var t = {
                                    id: e.id
                                },
                                e = re.AvatarAccoutrementService.getLayeredClothingAssetOrder(e.assetType.id);
                            void 0 !== e && (t.meta = {
                                order: e,
                                puffiness: 0,
                                version: 1
                            }), a.push(t)
                        }), a
                    }

                    function q(e) {
                        var t;
                        e = W(e = N = e), t = {}, oe().forEach(e, function(e) {
                            t[e] = !0
                        }), H = t
                    }

                    function Z() {
                        var e = W(N);
                        c.$broadcast(m.events.wornAssetsChanged, e),
                            function(e) {
                                var a = [],
                                    s = 0;
                                for (oe().forEach(e, function(e) {
                                        var t;
                                        3 <= s || "Hat" === e.assetType.name && (t = {
                                            type: "Asset"
                                        }, oe().extend(t, e), c.addItemThumbnailAndLink(t), s++, a.push(t))
                                    }); s < 3;) s++, a.push({
                                    empty: !0
                                });
                                c.hatSlots = a
                            }(N)
                    }

                    function G(e) {
                        var t = a.slice();
                        return e.assets.forEach(function(e) {
                            !e.assetType || 0 <= (e = t.indexOf(e.assetType.id)) && t.splice(e, 1)
                        }), !(0 < t.length)
                    }
                    c.updateItemSelected = function(e) {
                        e.selected = "Asset" === e.type && !0 === H[e.id]
                    };
                    var J = !0;

                    function z(e, t) {
                        e = u.setWearingAssets(e);
                        return c.avatarCallLimiter.itemCardsDisabled = c.avatarLibrary.metaData.isAvatarWearingApiCallsLockingOnFrontendEnabled, e.then(function() {
                            d.debug("Success with set-wearing-assets"), J ? c.refreshThumbnail() : J = !0, t && E()
                        }, function() {
                            d.debug("Error with set-wearing-assets")
                        }).finally(function() {
                            c.avatarCallLimiter.itemCardsDisabled = !1
                        }), e
                    }

                    function _(e) {
                        var t = N;
                        q(e), Z();
                        var a, s = W(N),
                            s = c.avatarLibrary.metaData.LCEnabledInEditorAndCatalog ? (e = j(e), a = !1, e = u.setWearingAssetsV2(e), c.avatarCallLimiter.itemCardsDisabled = c.avatarLibrary.metaData.isAvatarWearingApiCallsLockingOnFrontendEnabled, e.then(function() {
                                d.debug("Success with set-wearing-assets"), J ? c.refreshThumbnail() : J = !0, a && E()
                            }, function() {
                                d.debug("Error with set-wearing-assets")
                            }).finally(function() {
                                c.avatarCallLimiter.itemCardsDisabled = !1
                            }), e) : z(s, !1);
                        return s.then(function() {}, function() {
                            c.systemFeedback.error(m.assets.errorUpdatingItems), q(t), Z()
                        }), s
                    }

                    function V(e) {
                        var t = re.AvatarAccoutrementService.removeAssetFromAvatar(e, N);
                        return J = !re.AvatarAccoutrementService.isAnimation(e.assetType.name), _(t)
                    }
                    c.toastLayout = {
                        isNeeded: !1,
                        timeout: m.defaultClothing.displayTimeInMilliseconds,
                        text: m.defaultClothing.wearClothing
                    };
                    var K = null,
                        Y = null,
                        X = !0;

                    function Q(e) {
                        for (var t = "#000000", a = 0; a < k.bodyColorsPalette.length; a++) {
                            var s = k.bodyColorsPalette[a];
                            s.brickColorId === e && (t = s.hexColor)
                        }
                        var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                        if (null === n) throw new Error("Unable to parse bodyColor with ID=".concat(e, " and retrieved hex=").concat(t));
                        return {
                            R: parseInt(n[1], 16),
                            G: parseInt(n[2], 16),
                            B: parseInt(n[3], 16)
                        }
                    }

                    function ee(e, t) {
                        e = Q(e), t = Q(t);
                        return le.DeltaE(e, t) < k.minimumDeltaEBodyColorDifference
                    }

                    function te(e) {
                        return null !== e && null !== I && (e = (t = e).torsoColorId === t.leftLegColorId && t.leftLegColorId === t.rightLegColorId, !!(c.avatarDataModel.defaultClothingForSimilarColorsEnabled ? e || ee(t.torsoColorId, t.rightLegColorId) || ee(t.torsoColorId, t.leftLegColorId) : e) && ! function(e) {
                            for (var t = 0; t < N.length; t++)
                                if (N[t].assetType.name === e) return !0;
                            return !1
                        }("Pants"));
                        var t
                    }

                    function ae() {
                        var e, t;
                        null !== c.avatarDataModel && c.avatarDataModel.enableDefaultClothingMessage && (!X || c.avatarDataModel.showDefaultClothingMessageOnPageLoad ? (e = te(Y), t = K !== e, (K = e) && t && (c.toastLayout.isNeeded = !0)) : X = !1)
                    }
                    var se = function() {
                            return u.getCategories().then(function(e) {
                                c.categoryDict = e
                            })
                        },
                        ne = function() {
                            return u.getSubcategories().then(function(e) {
                                c.subcategoryDict = e
                            })
                        };
                    c.$on(m.events.avatarDetailsLoaded, function(e, t) {
                        Y = t.bodyColors, ae()
                    }), e.$on(m.events.bodyColorsChanged, function(e, t) {
                        Y = t, ae()
                    });
                    var ie = !0;
                    c.$on(m.events.wornAssetsChanged, function(e, t) {
                        ie ? ie = !1 : ae()
                    });
                    l = c.tabs[0], e = (l.subCategoryMenu ? l : l.categoryRows[0]).subCategoryMenu[0];
                    c.onMenuClick(l, e), c.loadAvatarPage(), B(), c.avatarCallLimiter.itemCardsDisabled = !1, c.pageFocused = function(e) {
                        d.debug("Page didn't have focus for ", e), e > m.page.idleRefreshTimeInSeconds && (E(), c.refreshThumbnail())
                    }
                }
                u.$inject = ["$scope", "$log", "$timeout", "$q", "$rootScope", "avatarService", "avatarConstantService", "avatarUrlConstants", "avatarBodyPartIds", "$anchorScroll", "googleAnalyticsEventsService", "urlService", "$uibModal", "modalService", "$window", "languageResource", "avatarTypeService", "thumbnailService", "thumbnailConstants", "localStorageService", "assetTypeLabels", "experimentationService"], t.Z.controller("avatarController", u);
                var m = u
            },
            9980: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    default: function() {
                        return i
                    }
                });
                var t = a(5734),
                    b = a.n(t),
                    v = a(792),
                    a = a(9681),
                    s = [{
                        maxNumber: 1,
                        id: 18,
                        name: "Face",
                        type: "Face"
                    }, {
                        maxNumber: 1,
                        id: 19,
                        name: "Gear",
                        type: "Gear"
                    }, {
                        maxNumber: 1,
                        id: 17,
                        name: "Head",
                        type: "Head"
                    }, {
                        maxNumber: 1,
                        id: 29,
                        name: "Left Arm",
                        type: "LeftArm"
                    }, {
                        maxNumber: 1,
                        id: 30,
                        name: "Left Leg",
                        type: "LeftLeg"
                    }, {
                        maxNumber: 1,
                        id: 12,
                        name: "Pants",
                        type: "Pants"
                    }, {
                        maxNumber: 1,
                        id: 28,
                        name: "Right Arm",
                        type: "RightArm"
                    }, {
                        maxNumber: 1,
                        id: 31,
                        name: "Right Leg",
                        type: "RightLeg"
                    }, {
                        maxNumber: 1,
                        id: 11,
                        name: "Shirt",
                        type: "Shirt"
                    }, {
                        maxNumber: 1,
                        id: 2,
                        name: "T-Shirt",
                        type: "TShirt"
                    }, {
                        maxNumber: 1,
                        id: 27,
                        name: "Torso",
                        type: "Torso"
                    }, {
                        maxNumber: 1,
                        id: 48,
                        name: "Climb Animation",
                        type: "ClimbAnimation"
                    }, {
                        maxNumber: 1,
                        id: 49,
                        name: "Death Animation",
                        type: "DeathAnimation"
                    }, {
                        maxNumber: 1,
                        id: 50,
                        name: "Fall Animation",
                        type: "FallAnimation"
                    }, {
                        maxNumber: 1,
                        id: 51,
                        name: "Idle Animation",
                        type: "IdleAnimation"
                    }, {
                        maxNumber: 1,
                        id: 52,
                        name: "Jump Animation",
                        type: "JumpAnimation"
                    }, {
                        maxNumber: 1,
                        id: 53,
                        name: "Run Animation",
                        type: "RunAnimation"
                    }, {
                        maxNumber: 1,
                        id: 54,
                        name: "Swim Animation",
                        type: "SwimAnimation"
                    }, {
                        maxNumber: 1,
                        id: 55,
                        name: "Walk Animation",
                        type: "WalkAnimation"
                    }, {
                        maxNumber: 1,
                        id: 56,
                        name: "Pose Animation",
                        type: "PoseAnimation"
                    }, {
                        maxNumber: 0,
                        id: 61,
                        name: "Emote Animation",
                        type: "EmoteAnimation"
                    }, {
                        maxNumber: 3,
                        id: 8,
                        name: "Hat",
                        type: "Hat"
                    }, {
                        maxNumber: 1,
                        id: 41,
                        name: "Hair Accessory",
                        type: "HairAccessory"
                    }, {
                        maxNumber: 1,
                        id: 42,
                        name: "Face Accessory",
                        type: "FaceAccessory"
                    }, {
                        maxNumber: 1,
                        id: 43,
                        name: "Neck Accessory",
                        type: "NeckAccessory"
                    }, {
                        maxNumber: 1,
                        id: 44,
                        name: "Shoulder Accessory",
                        type: "ShoulderAccessory"
                    }, {
                        maxNumber: 1,
                        id: 45,
                        name: "Front Accessory",
                        type: "FrontAccessory"
                    }, {
                        maxNumber: 1,
                        id: 46,
                        name: "Back Accessory",
                        type: "BackAccessory"
                    }, {
                        maxNumber: 1,
                        id: 47,
                        name: "Waist Accessory",
                        type: "WaistAccessory"
                    }, {
                        maxNumber: 1,
                        id: 72,
                        name: "Dress Skirt Accessory",
                        type: "DressSkirtAccessory"
                    }, {
                        maxNumber: 1,
                        id: 67,
                        name: "Jacket Accessory",
                        type: "JacketAccessory"
                    }, {
                        maxNumber: 1,
                        id: 70,
                        name: "Left Shoe Accessory",
                        type: "LeftShoeAccessory"
                    }, {
                        maxNumber: 1,
                        id: 71,
                        name: "Right Shoe Accessory",
                        type: "RightShoeAccessory"
                    }, {
                        maxNumber: 1,
                        id: 66,
                        name: "Pants Accessory",
                        type: "PantsAccessory"
                    }, {
                        maxNumber: 1,
                        id: 65,
                        name: "Shirt Accessory",
                        type: "ShirtAccessory"
                    }, {
                        maxNumber: 1,
                        id: 69,
                        name: "Shorts Accessory",
                        type: "ShortsAccessory"
                    }, {
                        maxNumber: 1,
                        id: 68,
                        name: "Sweater Accessory",
                        type: "SweaterAccessory"
                    }, {
                        maxNumber: 1,
                        id: 64,
                        name: "T-Shirt Accessory",
                        type: "TShirtAccessory"
                    }];

                function p(t) {
                    var a;
                    return s.forEach(function(e) {
                        e.id === t && (a = e)
                    }), a
                }

                function f(t) {
                    var a;
                    return s.forEach(function(e) {
                        e.name === t && (a = e)
                    }), a
                }

                function n(n, s, e, t, a, i, o, r, l) {
                    s.debug("avatarItemsController"), n.isEmotesEnabled = !1, n.loading = !1, n.items = [], n.emptyMessage = "", n.requestedAssetTypes = [];
                    var c = {},
                        d = null;

                    function u(e) {
                        c = {}, n.items = [], void 0 !== e && b().forEach(e, function(e) {
                            n.items.push(e), c[e.id] = !0
                        }), n.loading = !0, d.loadFirstPage().then(function() {
                            n.loading = !1
                        }, function() {})
                    }

                    function m() {
                        var e;
                        null !== n.selectedMenu || null === n.selectedRow ? (e = (e = n.selectedMenu).fullLabel || e.label, n.emptyMessage = t.assets.emptyMessage(e)) : n.emptyMessage = t.assets.emptyMessage(n.selectedRow.title)
                    }

                    function g() {
                        return "Assets" === n.selectedTab.tabType
                    }
                    d = e.createPager({
                        sortOrder: e.sortOrder.Desc,
                        pageSize: 30,
                        loadPageSize: 50,
                        getDataListFromResponse: function(a) {
                            return o(function(e, t) {
                                e(a.data || [])
                            })
                        },
                        getNextPageCursorFromResponse: function(e) {
                            return e.data ? e.nextPageCursor : null
                        },
                        getErrorsFromResponse: function(e) {
                            return e.isValid ? [] : [{
                                code: 0,
                                message: e.Data || e.error || ""
                            }]
                        },
                        getCacheKeyParameters: function(e) {
                            return {
                                assetTypeId: e.assetTypes
                            }
                        },
                        getRequestUrl: function() {
                            return l.getInventoryUrl(v.CurrentUser.userId)
                        },
                        beforeLoad: function() {},
                        loadSuccess: function(e) {
                            var a = [],
                                t = n.defaultPagingParameterIdForCategory;
                            n.recommendationsData && (n.recommendationsData.showRecommendations = !0, n.recommendationsData.recommendationType = r.recommendationTypes.assets, n.recommendationsData.recommendationSubtype = t), 0 < e.length && (n.emptyMessage = ""), n.loading = !0, l.postItemDetails(e, "Asset").then(function(e) {
                                n.loading = !1, b().forEach(e.data, function(e) {
                                    var t = {};
                                    t.name = e.name, t.id = e.id, t.type = "Asset", n.addItemThumbnailAndLink(t), n.$parent.updateItemSelected && n.$parent.updateItemSelected(t), t.expired = e.UserItem && e.UserItem.IsRentalExpired, t.thumbnail = e.Thumbnail, t.assetType = {
                                        id: e.assetType,
                                        name: v.AvatarAccoutrementService.getAssetTypeById(e.assetType).name
                                    }, t.expired ? s.debug("".concat(t.name, " is expired!")) : n.requestedAssetTypes.includes(t.assetType.id) && (c[t.id] ? s.debug("".concat(t.name, " is a duplicate")) : (c[t.id] = !0, a.push(t)))
                                }), [].push.apply(n.items, a), d.hasNextPage() ? (n.recommendationsData.showRecommendations = !1, n.$emit("manualInfiniteScrollCheck")) : (s.debug("Doesn't have next page, loading recommendations"), n.recommendationsData.showRecommendations = !0), m()
                            }, function() {})
                        },
                        loadError: function() {
                            n.systemFeedback.error(t.assets.couldNotLoadList)
                        }
                    }), n.getNextPage = function() {
                        var e;
                        "Assets" === n.selectedTab.tabType && d.canLoadNextPage() && (e = d.loadNextPage(), n.loading = !0, e.then(function() {
                            n.loading = !1
                        }, function() {}))
                    }, n.$on(t.events.wornAssetsChanged, function(e, t) {
                        b().forEach(n.items, function(e) {
                            n.$parent.updateItemSelected(e)
                        })
                    }), n.$on(t.events.menuClicked, function(e, t) {
                        var a, s = t.menu;
                        t.tab;
                        g() && (!s.assetType || (t = (n.isEmotesEnabled ? v.AvatarAccoutrementService : n).getAssetTypeByName(s.assetType)) && (n.defaultPagingParameterIdForCategory = t.id, n.requestedAssetTypes = [], s.groupedAssetTypes ? (a = "", s.groupedAssetTypes.forEach(function(e) {
                            0 < a.length && (a += ","), a += f(e).type, n.requestedAssetTypes.push(v.AvatarAccoutrementService.getAssetTypeByName(e).id)
                        }), d.setPagingParameter("assetTypes", a)) : (d.setPagingParameter("assetTypes", p(t.id).type), n.requestedAssetTypes[0] = t.id), m(), u()))
                    }), n.$on(t.events.submenuClicked, function(e, t) {
                        var t = t.category,
                            a = "";
                        n.requestedAssetTypes = [];

                        function s(e) {
                            0 < a.length && (a += ","), a += f(e).type, n.requestedAssetTypes.push(v.AvatarAccoutrementService.getAssetTypeByName(e).id)
                        }
                        t.subCategoryMenu.forEach(function(e) {
                            e.groupedAssetTypes ? e.groupedAssetTypes.forEach(s) : s(e.assetType)
                        }), d.setPagingParameter("assetTypes", a), n.defaultPagingParameterIdForCategory = n.requestedAssetTypes[0], m(), u()
                    }), n.init = function() {
                        n.recommendationsData = {
                            showRecommendations: !1
                        }, d.setPagingParameter("userId", v.CurrentUser.userId), m(), g() && u()
                    }, n.initEmotes = function(e) {
                        n.isMenuOpen = e.isMenuOpen, n.selectedTab = e.selectedTab, n.selectedMenu = e.selectedMenu, n.selectedCategory = e.selectedCategory, n.selectedSubcategory = e.selectedSubcategory, n.isEmotesEnabled = !0;
                        var t = [];
                        void 0 !== e.selectedItem && null !== e.selectedItem && t.push(e.selectedItem);
                        e = e.assetTypeInfo;
                        e && (d.setPagingParameter("assetTypes", p(e.id).type), n.defaultPagingParameterIdForCategory = e.id, n.requestedAssetTypes = [], n.requestedAssetTypes[0] = e.id, d.setPagingParameter("userId", v.CurrentUser.userId), m(), u(t))
                    }
                }
                n.$inject = ["$scope", "$log", "cursorPaginationService", "avatarConstantService", "avatarUrlConstants", "$document", "$q", "recommendationsConstants", "avatarService"], a.Z.controller("avatarItemsController", n);
                var i = n
            },
            6993: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(s, a, n, i, o, r) {
                    s.scales = r.getScales(), s.scaleProportionAndBodyTypeEnabled = !1, s.updateScales = function() {
                        a.debug("updateScales"), r.updateScales(s.scales, s.scaleProportionAndBodyTypeEnabled);
                        var e = r.getScales(),
                            t = {
                                height: e.height.value / 100,
                                width: e.width.value / 100,
                                head: e.head.value / 100
                            };
                        s.scaleProportionAndBodyTypeEnabled && (t.proportion = e.proportion.value / 100, t.bodyType = e.bodyType.value / 100), i.setScales(t).then(function(e) {
                            s.refreshThumbnail()
                        }, function() {
                            s.systemFeedback.error(o.scales.failedToUpdate)
                        })
                    }, s.initializeScaleMetrics = function(e) {
                        var t = e.avatarRules,
                            a = e.avatarDetails,
                            e = e.metaData;
                        s.scaleProportionAndBodyTypeEnabled = e.supportProportionAndBodyType && t.proportionsAndBodyTypeEnabledForUser, r.initializeScaleMetrics(t, e, s.scaleProportionAndBodyTypeEnabled), n(function() {
                            r.applyCurrentScale(a, s.scaleProportionAndBodyTypeEnabled)
                        })
                    }, s.$watch(function() {
                        return s.avatarDataModel.isAvatarScaleEmbeddedInTab
                    }, function(e, t) {
                        e && s.avatarLibrary && s.initializeScaleMetrics(s.avatarLibrary)
                    }, !0), s.$on(o.events.pageLoaded, function(e, t) {
                        s.initializeScaleMetrics(t)
                    }), s.$on(o.events.avatarDetailsLoaded, function(e, t) {
                        r.applyCurrentScale(t, s.scaleProportionAndBodyTypeEnabled)
                    })
                }
                s.$inject = ["$scope", "$log", "$timeout", "avatarService", "avatarConstantService", "avatarScaleService"], a.Z.controller("avatarScaleController", s), t.default = s
            },
            4920: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(a, t, s) {
                    function n() {
                        a.avatarDataModel.scaleEnabled = "R15" === a.avatarType
                    }
                    a.avatarType = a.avatarDataModel.avatarType, a.avatarTypes = s.avatarType.avatarTypes, a.updateAvatarType = function() {
                        var e = a.avatarType;
                        n(), t.setAvatarType(e).then(function(e) {
                            a.refreshThumbnail()
                        }, function() {
                            a.systemFeedback.error(s.avatarType.failedToUpdate)
                        })
                    }, a.$on(s.events.avatarDetailsLoaded, function(e, t) {
                        a.avatarType = t.playerAvatarType, n()
                    })
                }
                s.$inject = ["$scope", "avatarService", "avatarConstantService"], a.Z.controller("avatarTypeController", s), t.default = s
            },
            8490: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(n, t, e, i, s, o, r, l) {
                    n.myBodyColors = {
                        headColorId: 0,
                        torsoColorId: 0,
                        rightArmColorId: 0,
                        leftArmColorId: 0,
                        rightLegColorId: 0,
                        leftLegColorId: 0
                    }, n.currentColorId = null, n.bodyParts = [{
                        label: i.bodyParts.all,
                        name: "all"
                    }, {
                        label: i.bodyParts.head,
                        name: "headColorId"
                    }, {
                        label: i.bodyParts.torso,
                        name: "torsoColorId"
                    }, {
                        label: i.bodyParts.leftArm,
                        name: "leftArmColorId"
                    }, {
                        label: i.bodyParts.rightArm,
                        name: "rightArmColorId"
                    }, {
                        label: i.bodyParts.leftLeg,
                        name: "leftLegColorId"
                    }, {
                        label: i.bodyParts.rightLeg,
                        name: "rightLegColorId"
                    }];
                    var c = n.bodyParts[0],
                        d = !1;

                    function u() {
                        var e, t;
                        n.currentColorId = (e = n.myBodyColors, t = e.headColorId, e.headColorId === t && e.torsoColorId === t && e.rightArmColorId === t && e.leftArmColorId === t && e.rightLegColorId === t && e.leftLegColorId === t ? n.myBodyColors.headColorId : null)
                    }

                    function m() {
                        var e = i.googleAnalytics.closeLabel;
                        d && (e = i.googleAnalytics.saveLabel), s.fireEvent(i.googleAnalytics.category, i.googleAnalytics.advancedBodyColorsAction, e)
                    }
                    n.colorsPalette = [], n.advancedPalette = [], n.isColorSelected = function(e) {
                        return e.brickColorId === n.currentColorId
                    }, n.onColorDotClicked = function(a, s) {
                        return void 0 === s && (s = c),
                            function() {
                                var e = a.brickColorId,
                                    t = n.myBodyColors;
                                switch (s.name) {
                                    case "all":
                                        t.headColorId = e, t.torsoColorId = e, t.leftArmColorId = e, t.rightArmColorId = e, t.leftLegColorId = e, t.rightLegColorId = e;
                                        break;
                                    case "headColorId":
                                        t.headColorId = e;
                                        break;
                                    case "torsoColorId":
                                        t.torsoColorId = e;
                                        break;
                                    case "leftArmColorId":
                                        t.leftArmColorId = e;
                                        break;
                                    case "rightArmColorId":
                                        t.rightArmColorId = e;
                                        break;
                                    case "leftLegColorId":
                                        t.leftLegColorId = e;
                                        break;
                                    case "rightLegColorId":
                                        t.rightLegColorId = e
                                }
                                u()
                            }(), d = !0, e.setBodyColors(n.myBodyColors).then(function() {
                                o.$broadcast(i.events.bodyColorsChanged, n.myBodyColors), n.refreshThumbnail()
                            }, function() {
                                n.systemFeedback.error(i.bodyColors.failedToUpdate)
                            })
                    }, n.openAdvancedBodyColors = function() {
                        t.debug("advanced body colors"), d = !1;
                        var e = l.modals.advancedBodyColor.templateUrl,
                            a = {
                                colorsPalette: n.advancedPalette,
                                bodyParts: n.bodyParts,
                                selectedBodyPart: c,
                                onColorDotClicked: n.onColorDotClicked,
                                isColorSelected: function(e) {
                                    return t = e.brickColorId, "all" === (e = a.selectedBodyPart).name ? n.currentColorId === t : n.myBodyColors[e.name] === t;
                                    var t
                                }
                            },
                            e = {
                                animation: !1,
                                templateUrl: e,
                                controller: l.modals.advancedBodyColor.controllerName,
                                openedClass: l.modals.openedClass,
                                resolve: {
                                    modalData: a
                                }
                            };
                        r.open(e).result.then(function() {
                            m()
                        }, function() {
                            m()
                        }), s.fireEvent(i.googleAnalytics.category, i.googleAnalytics.advancedBodyColorsAction, i.googleAnalytics.openLabel)
                    }, n.$on(i.events.avatarRulesLoaded, function(e, t) {
                        n.colorsPalette = t.basicBodyColorsPalette, n.advancedPalette = t.bodyColorsPalette
                    }), n.$on(i.events.avatarDetailsLoaded, function(e, t) {
                        n.myBodyColors = t.bodyColors, u()
                    })
                }
                s.$inject = ["$scope", "$log", "avatarService", "avatarConstantService", "googleAnalyticsEventsService", "$rootScope", "$uibModal", "avatarUrlConstants"], a.Z.controller("bodyColorsController", s), t.default = s
            },
            5696: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(i, e, a, t, s, n, o, r) {
                    i.emotesModalData = t, i.systemFeedback = t.systemFeedback;
                    var l = n.emotes;

                    function c() {
                        i.selectedAssetId = null, i.hoveredPositionIndex = null, i.selectedPositionIndex = null, i.isRequestDelete = !1
                    }

                    function d(e, t) {
                        s.equipEmote(e, t).then(function() {
                            a.debug("Updated emote"), i.systemFeedback.success(l.successfulUpdate), i.radialSlices[t] = {
                                isEmpty: !1,
                                position: t,
                                assetId: e
                            }, c()
                        }, function() {
                            i.systemFeedback.error(l.errorUpdatingEmote)
                        })
                    }
                    i.radialSlices = {}, i.isRequestDelete = !1, i.selectedAssetId = t.selectedItem ? t.selectedItem.id : null, i.selectedPositionIndex = null, i.hoveredPositionIndex = null, i.addItemThumbnailAndLink = t.addItemThumbnailAndLink, i.systemFeedback = t.systemFeedback, i.getAssetTypeByName = o.getAssetTypeByName, i.getAssetTypeName = o.getAssetTypeName, i.thumbnailTypes = r.thumbnailTypes, i.init = function() {
                        s.getEmotes().then(function(e) {
                            for (var t = 0; t < e.length; t++) {
                                var a = e[t].position,
                                    s = e[t].assetId;
                                i.radialSlices[a] = {
                                    isEmpty: !1,
                                    position: a,
                                    assetId: s
                                }
                            }
                            for (var n = 1; n <= 8; n++) null !== i.radialSlices[n] && void 0 !== i.radialSlices[n] || (i.radialSlices[n] = {
                                isEmpty: !0,
                                position: n,
                                assetId: null
                            })
                        }, function() {
                            i.systemFeedback.error(l.errorGettingEmotes)
                        })
                    }, i.onEmotesPositionClick = function(e, t) {
                        null === i.selectedAssetId ? null === i.selectedPositionIndex || i.selectedPositionIndex !== e ? (i.selectedPositionIndex = e, i.isRequestDelete = !t) : c() : d(i.selectedAssetId, e)
                    }, i.onEmotesCardClick = function(e) {
                        null === i.selectedPositionIndex ? null === i.selectedAssetId || i.selectedAssetId !== e ? i.selectedAssetId = e : c() : d(e, i.selectedPositionIndex)
                    }, i.confirmDelete = function() {
                        null !== i.selectedPositionIndex && (s.unequipEmote(i.selectedPositionIndex).then(function() {
                            a.debug("Deleted emote"), i.systemFeedback.success(l.successfulDelete), i.radialSlices[i.selectedPositionIndex] = {
                                isEmpty: !0,
                                position: i.selectedPositionIndex,
                                assetId: null
                            }, c()
                        }, function() {
                            i.systemFeedback.error(l.errorDeletingEmote)
                        }), i.isRequestDelete = !1)
                    }, i.onHoverPosition = function(e) {
                        i.hoveredPositionIndex = e
                    }, i.close = function() {
                        e.dismiss()
                    }, i.resetHoveredPosition = function() {
                        i.hoveredPositionIndex = i.selectedPositionIndex
                    }, i.init()
                }
                s.$inject = ["$scope", "$uibModalInstance", "$log", "modalData", "avatarService", "avatarConstantService", "avatarTypeService", "thumbnailConstants"], a.Z.controller("emotesModalController", s), t.default = s
            },
            1393: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(t, a, e, s) {
                    t.params = s, t.submit = function() {
                        var e = {
                            outfitName: t.outfitName
                        };
                        a.close(e)
                    }, t.close = function() {
                        a.dismiss()
                    }
                }
                s.$inject = ["$scope", "$uibModalInstance", "$log", "modalData"], a.Z.controller("outfitNameModalController", s), t.default = s
            },
            412: function(e, t, a) {
                "use strict";
                a.r(t);
                var s = a(5734),
                    l = a.n(s),
                    c = a(792),
                    a = a(9681);

                function n(s, a, n) {
                    s.loading = !1, s.items = [], s.isOutfitCostumeMessage = !0, s.appMeta = {
                        isI18nEnabled: c.Lang.AvatarResources || !1
                    };
                    var i = !0,
                        o = 1;
                    s.emptyMessage = function() {
                        return (s.$parent.bundlesEnabledForUser ? n.outfits.costumeMessages : n.outfits.outfitMessages).emptyMessage
                    };

                    function r() {
                        o = 1, i = !0, s.loading = !1, s.items = [], s.getNextPage()
                    }
                    s.getNextPage = function() {
                        function t(e) {
                            s.loading = !1;
                            var t = null == e.filteredCount ? 0 : e.filteredCount;
                            i = e.data.length + t === 50, o += 1, l().forEach(e.data, function(e) {
                                e.type = "Outfit", s.addItemThumbnailAndLink(e)
                            }), s.items = s.items.concat(e.data)
                        }

                        function e() {
                            var e = (s.$parent.bundlesEnabledForUser ? n.outfits.costumeMessages : n.outfits.outfitMessages).emptyMessage;
                            s.systemFeedback.error(e.failedToLoadOutfits)
                        }
                        "Outfits" !== s.selectedTab.tabType && "Costumes" !== s.selectedTab.tabType || !s.loading && i && (s.loading = !0, "Outfits" === s.selectedTab.tabType ? a.getOutfits(s.avatarDataModel.userId, o, 50, !0).then(function(e) {
                            t(e)
                        }, e) : null !== s.selectedMenu && ("MyCostumes" === s.selectedMenu.name ? a.getOutfits(s.avatarDataModel.userId, o, 50, !0).then(function(e) {
                            t(e)
                        }, e) : "PresetCostumes" === s.selectedMenu.name && a.getOutfits(s.avatarDataModel.userId, o, 50, !1).then(function(e) {
                            t(e)
                        }, e)))
                    }, s.$on(n.events.outfitsChanged, function(e, t) {
                        r()
                    }), s.$on(n.events.outfitDeleted, function(e, a) {
                        l().forEach(s.items, function(e, t) {
                            e.id === a.id && s.items.splice(t, 1)
                        })
                    }), s.$on(n.events.menuClicked, function(e, t) {
                        t = t.tab;
                        "Outfits" !== t.name && "Costumes" !== t.name || (r(), t = "Outfits" === t.name ? "Outfit" : "Costume", s.createNewOutfitLabel = n.outfits.createNewOutfit(t))
                    })
                }
                n.$inject = ["$scope", "avatarService", "avatarConstantService"], a.Z.controller("outfitsController", n), t.default = n
            },
            2206: function(e, t, a) {
                "use strict";
                a.r(t);
                var s = a(5734),
                    r = a.n(s),
                    a = a(9681);

                function n(s, e, t) {
                    s.loading = !1, s.items = [], s.emptyMessage = t.recent.emptyMessage;
                    var n = "All",
                        i = !1;

                    function o() {
                        "Recent" !== s.selectedTab.name || i || s.loading || (s.loading = !0, s.items = [], e.getRecentItems(n).then(function(e) {
                            s.items = [];
                            for (var t = 0; t < e.data.length; t++) {
                                var a = e.data[t];
                                s.addItemThumbnailAndLink(a), s.updateItemSelected(a)
                            }
                            s.items = e.data, s.loading = !1, i = !0
                        }, function() {
                            s.systemFeedback.error(t.recent.couldNotLoadList)
                        }))
                    }
                    s.$on(t.events.wornAssetsChanged, function(e, t) {
                        r().forEach(s.items, function(e) {
                            s.$parent.updateItemSelected(e)
                        })
                    }), s.$on(t.events.outfitDeleted, function(e, a) {
                        r().forEach(s.items, function(e, t) {
                            e.id === a.id && s.items.splice(t, 1)
                        })
                    }), s.$on(t.events.menuClicked, function(e, t) {
                        var a = t.tab,
                            t = t.menu;
                        "Recent" === a.name && (n = t.name, i = !1, o())
                    }), s.$on(t.events.pageLoaded, function(e, t) {
                        o()
                    })
                }
                n.$inject = ["$scope", "avatarService", "avatarConstantService"], a.Z.controller("recentItemsController", n), t.default = n
            },
            2002: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(e) {
                    return {
                        restrict: "A",
                        replace: !1,
                        templateUrl: e.templates.avatarBack
                    }
                }
                s.$inject = ["avatarUrlConstants"], a.Z.directive("avatarBack", s), t.default = s
            },
            3877: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(e) {
                    return {
                        restrict: "A",
                        replace: !1,
                        templateUrl: e.templates.avatarBase
                    }
                }
                s.$inject = ["avatarUrlConstants"], a.Z.directive("avatarBase", s), t.default = s
            },
            8127: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(e) {
                    return {
                        restrict: "A",
                        replace: !1,
                        templateUrl: e.templates.avatarEditorTabs
                    }
                }
                s.$inject = ["avatarUrlConstants"], a.Z.directive("avatarEditorTabs", s), t.default = s
            },
            6445: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(e) {
                    return {
                        restrict: "A",
                        replace: !1,
                        templateUrl: e.templates.avatarItemCard
                    }
                }
                s.$inject = ["avatarUrlConstants"], a.Z.directive("avatarItemCard", s), t.default = s
            },
            441: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(e) {
                    return {
                        restrict: "A",
                        replace: !1,
                        templateUrl: e.templates.avatarItems
                    }
                }
                s.$inject = ["avatarUrlConstants"], a.Z.directive("avatarItems", s), t.default = s
            },
            195: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(e) {
                    return {
                        restrict: "A",
                        replace: !1,
                        templateUrl: e.templates.avatarScaling
                    }
                }
                s.$inject = ["avatarUrlConstants"], a.Z.directive("avatarScaling", s), t.default = s
            },
            6889: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(e) {
                    return {
                        restrict: "A",
                        replace: !1,
                        templateUrl: e.templates.avatarTabContent
                    }
                }
                s.$inject = ["avatarUrlConstants"], a.Z.directive("avatarTabContent", s), t.default = s
            },
            5783: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(e) {
                    return {
                        restrict: "A",
                        replace: !1,
                        templateUrl: e.templates.avatarTabContentHeader
                    }
                }
                s.$inject = ["avatarUrlConstants"], a.Z.directive("avatarTabContentHeader", s), t.default = s
            },
            3730: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(e) {
                    return {
                        restrict: "A",
                        replace: !1,
                        templateUrl: e.templates.emotesItemCard
                    }
                }
                s.$inject = ["avatarUrlConstants"], a.Z.directive("emotesItemCard", s), t.default = s
            },
            4571: function(e, t, a) {
                "use strict";

                function s() {
                    return {
                        restrict: "A",
                        replace: !1,
                        templateUrl: "loading-animated"
                    }
                }
                a.r(t), a(9681).Z.directive("loadingAnimated", s), t.default = s
            },
            3685: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(i, o, r) {
                    return {
                        restrict: "A",
                        scope: {
                            blurTarget: "=",
                            onBlur: "&"
                        },
                        link: function(t, a) {
                            function s(e) {
                                0 < a.has(e.target).length ? o.debug("clicked inside element") : (o.debug("clicked outside element"), i.off("click touchstart", s), n.active = !1, t.$apply(), t.$apply(t.onBlur()))
                            }
                            var n = t.blurTarget,
                                e = t.$watch("blurTarget.active", function(e) {
                                    void 0 !== n.active && (n.active ? (o.debug("binding click handler"), r(function() {
                                        i.on("click touchstart", s)
                                    }, 0)) : (o.debug("unbinding click handler"), i.off("click touchstart", s)))
                                });
                            t.$on("$destroy", function() {
                                e && e(), i.off("click touchstart", s)
                            })
                        }
                    }
                }
                s.$inject = ["$document", "$log", "$timeout"], a.Z.directive("onBlur", s), t.default = s
            },
            4778: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(a) {
                    return {
                        scope: {
                            fn: "&onInputFinished"
                        },
                        restrict: "A",
                        link: function(e, t) {
                            /Edge/.test(navigator.userAgent) && t.is("input[type=range]") ? (a.debug("Is Edge, using input event"), t.on("input", function() {
                                a.debug("onInputFinished input"), e.$apply(e.fn())
                            })) : (a.debug("Is not Edge, using change event"), t.on("change", function() {
                                a.debug("onInputFinished change"), e.$apply(e.fn())
                            }))
                        }
                    }
                }
                s.$inject = ["$log"], a.Z.directive("onInputFinished", s), t.default = s
            },
            2587: function(e, t, a) {
                "use strict";
                a.r(t);
                var s = a(5734),
                    n = a.n(s),
                    s = a(3609),
                    i = a.n(s),
                    a = a(9681);

                function o(s) {
                    return {
                        restrict: "A",
                        scope: {
                            focusGained: "&focusGained",
                            focusLost: "&focusLost"
                        },
                        link: function(a) {
                            n().element(document).ready(function() {
                                var t = null;
                                i()(window).focus(function() {
                                    s.debug("Window focus");
                                    var e = (new Date).getTime();
                                    null !== t && (e = (e - t) / 1e3, a.secondsIdle = e, a.focusGained({
                                        secondsIdle: e
                                    }))
                                }), i()(window).blur(function() {
                                    s.debug("Window blur"), t = (new Date).getTime(), a.focusLost()
                                })
                            })
                        }
                    }
                }
                o.$inject = ["$log"], a.Z.directive("pageFocus", o), t.default = o
            },
            9689: function(e, t, a) {
                "use strict";
                a.r(t), a(9681).Z.filter("orderObjectBy", function() {
                    return function(e, a) {
                        var t = [];
                        return angular.forEach(e, function(e) {
                            t.push(e)
                        }), t.sort(function(e, t) {
                            return e[a] > t[a] ? 1 : -1
                        }), t
                    }
                })
            },
            6477: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(a) {
                    return function(e, t) {
                        return a("number")(100 * e, t)
                    }
                }
                s.$inject = ["$filter"], a.Z.filter("percentage", s), t.default = s
            },
            280: function(e, t, a) {
                "use strict";
                a.r(t), a(9681).Z.filter("round", function() {
                    return function(e, t) {
                        return t * Math.round(e / t)
                    }
                })
            },
            7458: function(e, t, a) {
                "use strict";
                a.r(t);
                a = a(9681);

                function s(e) {
                    var a = e;
                    return {
                        events: {
                            avatarDetailsLoaded: "Roblox.Avatar.AvatarDetailsLoaded",
                            avatarRulesLoaded: "Roblox.Avatar.AvatarRulesLoaded",
                            menuClicked: "Roblox.Avatar.MenuClicked",
                            submenuClicked: "Roblox.Avatar.SubmenuClicked",
                            outfitsChanged: "Roblox.Avatar.OutfitsChanged",
                            outfitDeleted: "Roblox.Avatar.OutfitDeleted",
                            wornAssetsChanged: "Roblox.Avatar.WornAssetsChanged",
                            metaDataLoaded: "Roblox.Avatar.MetaDataLoaded",
                            bodyColorsChanged: "Roblox.Avatar.BodyColorsChanged",
                            pageLoaded: "Roblox.Avatar.PageLoaded"
                        },
                        page: {
                            errorLoadingPage: a.get("Message.PageUnavailable"),
                            idleRefreshTimeInSeconds: 10
                        },
                        tabs: [{
                            label: a.get("Heading.Recent"),
                            name: "Recent",
                            subCategoryMenu: [{
                                name: "All",
                                label: a.get("Heading.All")
                            },
                            {
                                name: "Clothing",
                                label: a.get("Heading.Clothing")
                            }, {
                                name: "BodyParts",
                                label: a.get("Heading.BodyParts")
                            }, {
                                name: "AvatarAnimations",
                                label: a.get("Heading.Animations")
                            }, {
                                name: "Outfits",
                                label: a.get("Heading.Characters")
                            }]
                        }, {
                            label: a.get("Heading.Characters"),
                            name: "Outfits",
                            tabType: "Costumes",
                            subCategoryMenu: [{
                                name: "PresetCostumes",
                                label: a.get("Label.Purchased"),
                                fullLabel: a.get("Label.Purchased")
                            }, {
                                name: "MyCostumes",
                                label: a.get("Label.Creations"),
                                fullLabel: a.get("Label.Creations")
                            }],
                            visible: !0
                        }, {
                            label: a.get("Heading.Costumes"),
                            name: "Costumes",
                            tabType: "Costumes",
                            visible: !1,
                            subCategoryMenu: [{
                                name: "PresetCostumes",
                                label: a.get("Label.PresetCostumes"),
                                fullLabel: a.get("Label.PresetCostumes")
                            }, {
                                name: "MyCostumes",
                                label: a.get("Label.MyCostumes"),
                                fullLabel: a.get("Label.MyCostumes")
                            }]
                        }, {
                            label: a.get("Heading.Clothing"),
                            name: "Clothing",
                            tabType: "Assets",
                            menuType: "Nested",
                            categoryRows: [{
                                title: a.get("Label.Clothes"),
                                name: "Clothing",
                                subCategoryMenu: [{
                                    name: "Shirts",
                                    label: a.get("Label.Shirts"),
                                    assetType: "Shirt"
                                }, {
                                    name: "Pants",
                                    label: a.get("Label.Pants"),
                                    assetType: "Pants"
                                }, {
                                    name: "T-Shirts",
                                    label: a.get("Label.TShirts"),
                                    assetType: "T-Shirt"
                                }]
                            }]
                        }, 
                        {
                            label: a.get("Heading.Body"),
                            name: "Body",
                            tabType: "Assets",
                            subCategoryMenu: [{
                                name: "BodyColors",
                                label: a.get("Label.SkinTone"),
                                fullLabel: a.get("Label.SkinTone")
                            }, {
                                name: "Hair",
                                label: a.get("Label.Hair"),
                                fullLabel: a.get("Label.HairAccessories"),
                                assetType: "Hair Accessory"
                            }, {
                                name: "Head",
                                label: a.get("Label.Head"),
                                assetType: "Head",
                                fullLabel: a.get("Label.Heads")
                            }, {
                                name: "Face",
                                label: a.get("Label.Face"),
                                assetType: "Face",
                                fullLabel: a.get("Label.Faces")
                            }, {
                                name: "Torso",
                                label: a.get("Label.Torso"),
                                assetType: "Torso",
                                fullLabel: a.get("Label.Torsos")
                            }, {
                                name: "LeftArms",
                                label: a.get("Label.LeftArms"),
                                assetType: "Left Arm",
                                fullLabel: a.get("Label.LeftArms")
                            }, {
                                name: "RightArms",
                                label: a.get("Label.RightArms"),
                                assetType: "Right Arm",
                                fullLabel: a.get("Label.RightArms")
                            }, {
                                name: "LeftLegs",
                                label: a.get("Label.LeftLegs"),
                                assetType: "Left Leg",
                                fullLabel: a.get("Label.LeftLegs")
                            }, {
                                name: "RightLegs",
                                label: a.get("Label.RightLegs"),
                                assetType: "Right Leg",
                                fullLabel: a.get("Label.RightLegs")
                            }, {
                                name: "Scale",
                                label: a.get("Label.Scale"),
                                visible: !0
                            }, {
                                name: "Package",
                                label: a.get("Heading.Packages"),
                                assetType: "Package",
                                fullLabel: a.get("Heading.Packages"),
                                visible: !1
                            }]
                        }, {
                            label: a.get("Heading.Animations"),
                            name: "AvatarAnimations",
                            tabType: "Assets",
                            subCategoryMenu: [{
                                name: "Emote",
                                label: a.get("Heading.Emotes"),
                                fullLabel: a.get("Heading.Emotes"),
                                assetType: "Emote Animation",
                                visible: !0
                            }, {
                                name: "Walk",
                                label: a.get("Label.Walk"),
                                fullLabel: a.get("Label.WalkAnimations"),
                                assetType: "Walk Animation"
                            }, {
                                name: "Run",
                                label: a.get("Label.Run"),
                                fullLabel: a.get("Label.RunAnimations"),
                                assetType: "Run Animation"
                            }, {
                                name: "Fall",
                                label: a.get("Label.Fall"),
                                fullLabel: a.get("Label.FallAnimations"),
                                assetType: "Fall Animation"
                            }, {
                                name: "Jump",
                                label: a.get("Label.Jump"),
                                fullLabel: a.get("Label.JumpAnimations"),
                                assetType: "Jump Animation"
                            }, {
                                name: "Swim",
                                label: a.get("Label.Swim"),
                                fullLabel: a.get("Label.SwimAnimations"),
                                assetType: "Swim Animation"
                            }, {
                                name: "Climb",
                                label: a.get("Label.Climb"),
                                fullLabel: a.get("Label.ClimbAnimations"),
                                assetType: "Climb Animation"
                            }, {
                                name: "Idle",
                                label: a.get("Label.Idle"),
                                fullLabel: a.get("Label.IdleAnimations"),
                                assetType: "Idle Animation"
                            }]
                        }],
                        tabsLayeredClothingUI: [{
                            label: a.get("Heading.Recent"),
                            name: "Recent",
                            subCategoryMenu: [{
                                name: "All",
                                label: a.get("Heading.All")
                            }, {
                                name: "Accessories",
                                label: a.get("Heading.Accessories")
                            }, {
                                name: "Clothing",
                                label: a.get("Heading.Clothing")
                            }, {
                                name: "BodyParts",
                                label: a.get("Heading.BodyParts")
                            }, {
                                name: "AvatarAnimations",
                                label: a.get("Heading.Animations")
                            }, {
                                name: "Outfits",
                                label: a.get("Heading.Characters")
                            }]
                        }, {
                            label: a.get("Heading.Characters"),
                            name: "Outfits",
                            tabType: "Costumes",
                            subCategoryMenu: [{
                                name: "PresetCostumes",
                                label: a.get("Label.Purchased"),
                                fullLabel: a.get("Label.Purchased")
                            }, {
                                name: "MyCostumes",
                                label: a.get("Label.Creations"),
                                fullLabel: a.get("Label.Creations")
                            }],
                            visible: !0
                        }, {
                            label: a.get("Heading.Costumes"),
                            name: "Costumes",
                            tabType: "Costumes",
                            visible: !1,
                            subCategoryMenu: [{
                                name: "PresetCostumes",
                                label: a.get("Label.PresetCostumes"),
                                fullLabel: a.get("Label.PresetCostumes")
                            }, {
                                name: "MyCostumes",
                                label: a.get("Label.MyCostumes"),
                                fullLabel: a.get("Label.MyCostumes")
                            }]
                        }, {
                            label: a.get("Heading.Clothing"),
                            name: "Clothing",
                            tabType: "Assets",
                            menuType: "Nested",
                            categoryRows: [{
                                title: a.get("Label.Outerwear"),
                                name: "Outerwear",
                                subCategoryMenu: [{
                                    name: "Jackets",
                                    label: a.get("Label.Jackets"),
                                    assetType: "Jacket Accessory"
                                }]
                            }, {
                                title: a.get("Label.Classic"),
                                name: "Classic",
                                subCategoryMenu: [{
                                    name: "Shirts",
                                    label: a.get("Label.ClassicShirts"),
                                    assetType: "Shirt"
                                }, {
                                    name: "Pants",
                                    label: a.get("Label.ClassicPants"),
                                    assetType: "Pants"
                                }, {
                                    name: "T-Shirts",
                                    label: a.get("Label.ClassicTShirts"),
                                    assetType: "T-Shirt"
                                }]
                            }]
                        }, {
                            label: a.get("Heading.Accessories"),
                            name: "Accessories",
                            tabType: "Assets",
                            subCategoryMenu: [{
                                name: "Hats",
                                label: a.get("Label.Head"),
                                fullLabel: a.get("Label.Head"),
                                assetType: "Hat"
                            }, {
                                name: "Face",
                                label: a.get("Label.Face"),
                                fullLabel: a.get("Label.FaceAccessories"),
                                assetType: "Face Accessory"
                            }, {
                                name: "Neck",
                                label: a.get("Label.Neck"),
                                fullLabel: a.get("Label.NeckAccessories"),
                                assetType: "Neck Accessory"
                            }, {
                                name: "Shoulder",
                                label: a.get("Label.Shoulders"),
                                fullLabel: a.get("Label.ShoulderAccessories"),
                                assetType: "Shoulder Accessory"
                            }, {
                                name: "Front",
                                label: a.get("Label.Front"),
                                fullLabel: a.get("Label.FrontAccessories"),
                                assetType: "Front Accessory"
                            }, {
                                name: "Back",
                                label: a.get("Label.Back"),
                                fullLabel: a.get("Label.BackAccessories"),
                                assetType: "Back Accessory"
                            }, {
                                name: "Waist",
                                label: a.get("Label.Waist"),
                                fullLabel: a.get("Label.WaistAccessories"),
                                assetType: "Waist Accessory"
                            }, {
                                name: "Gear",
                                label: a.get("Label.Gear"),
                                fullLabel: a.get("Label.Gear"),
                                assetType: "Gear"
                            }]
                        }, {
                            label: a.get("Heading.Body"),
                            name: "Body",
                            tabType: "Assets",
                            subCategoryMenu: [{
                                name: "BodyColors",
                                label: a.get("Label.SkinTone"),
                                fullLabel: a.get("Label.SkinTone")
                            }, {
                                name: "Hair",
                                label: a.get("Label.Hair"),
                                fullLabel: a.get("Label.HairAccessories"),
                                assetType: "Hair Accessory"
                            }, {
                                name: "Head",
                                label: a.get("Label.Head"),
                                assetType: "Head",
                                fullLabel: a.get("Label.Heads")
                            }, {
                                name: "Face",
                                label: a.get("Label.Face"),
                                assetType: "Face",
                                fullLabel: a.get("Label.Faces")
                            }, {
                                name: "Torso",
                                label: a.get("Label.Torso"),
                                assetType: "Torso",
                                fullLabel: a.get("Label.Torsos")
                            }, {
                                name: "LeftArms",
                                label: a.get("Label.LeftArms"),
                                assetType: "Left Arm",
                                fullLabel: a.get("Label.LeftArms")
                            }, {
                                name: "RightArms",
                                label: a.get("Label.RightArms"),
                                assetType: "Right Arm",
                                fullLabel: a.get("Label.RightArms")
                            }, {
                                name: "LeftLegs",
                                label: a.get("Label.LeftLegs"),
                                assetType: "Left Leg",
                                fullLabel: a.get("Label.LeftLegs")
                            }, {
                                name: "RightLegs",
                                label: a.get("Label.RightLegs"),
                                assetType: "Right Leg",
                                fullLabel: a.get("Label.RightLegs")
                            }, {
                                name: "Scale",
                                label: a.get("Label.Scale"),
                                visible: !0
                            }, {
                                name: "Package",
                                label: a.get("Heading.Packages"),
                                assetType: "Package",
                                fullLabel: a.get("Heading.Packages"),
                                visible: !1
                            }]
                        }, {
                            label: a.get("Heading.Animations"),
                            name: "AvatarAnimations",
                            tabType: "Assets",
                            subCategoryMenu: [{
                                name: "Emote",
                                label: a.get("Heading.Emotes"),
                                fullLabel: a.get("Heading.Emotes"),
                                assetType: "Emote Animation",
                                visible: !0
                            }, {
                                name: "Walk",
                                label: a.get("Label.Walk"),
                                fullLabel: a.get("Label.WalkAnimations"),
                                assetType: "Walk Animation"
                            }, {
                                name: "Run",
                                label: a.get("Label.Run"),
                                fullLabel: a.get("Label.RunAnimations"),
                                assetType: "Run Animation"
                            }, {
                                name: "Fall",
                                label: a.get("Label.Fall"),
                                fullLabel: a.get("Label.FallAnimations"),
                                assetType: "Fall Animation"
                            }, {
                                name: "Jump",
                                label: a.get("Label.Jump"),
                                fullLabel: a.get("Label.JumpAnimations"),
                                assetType: "Jump Animation"
                            }, {
                                name: "Swim",
                                label: a.get("Label.Swim"),
                                fullLabel: a.get("Label.SwimAnimations"),
                                assetType: "Swim Animation"
                            }, {
                                name: "Climb",
                                label: a.get("Label.Climb"),
                                fullLabel: a.get("Label.ClimbAnimations"),
                                assetType: "Climb Animation"
                            }, {
                                name: "Idle",
                                label: a.get("Label.Idle"),
                                fullLabel: a.get("Label.IdleAnimations"),
                                assetType: "Idle Animation"
                            }]
                        }],
                        tabsLayeredClothingCategories: [{
                            label: a.get("Heading.Recent"),
                            name: "Recent",
                            subCategoryMenu: [{
                                name: "All",
                                label: a.get("Heading.All")
                            }, {
                                name: "Accessories",
                                label: a.get("Heading.Accessories")
                            }, {
                                name: "Clothing",
                                label: a.get("Heading.Clothing")
                            }, {
                                name: "BodyParts",
                                label: a.get("Heading.BodyParts")
                            }, {
                                name: "AvatarAnimations",
                                label: a.get("Heading.Animations")
                            }, {
                                name: "Outfits",
                                label: a.get("Heading.Characters")
                            }]
                        }, {
                            label: a.get("Heading.Characters"),
                            name: "Outfits",
                            tabType: "Costumes",
                            subCategoryMenu: [{
                                name: "PresetCostumes",
                                label: a.get("Label.Purchased"),
                                fullLabel: a.get("Label.Purchased")
                            }, {
                                name: "MyCostumes",
                                label: a.get("Label.Creations"),
                                fullLabel: a.get("Label.Creations")
                            }],
                            visible: !0
                        }, {
                            label: a.get("Heading.Costumes"),
                            name: "Costumes",
                            tabType: "Costumes",
                            visible: !1,
                            subCategoryMenu: [{
                                name: "PresetCostumes",
                                label: a.get("Label.PresetCostumes"),
                                fullLabel: a.get("Label.PresetCostumes")
                            }, {
                                name: "MyCostumes",
                                label: a.get("Label.MyCostumes"),
                                fullLabel: a.get("Label.MyCostumes")
                            }]
                        }, {
                            label: a.get("Heading.Clothing"),
                            name: "Clothing",
                            tabType: "Assets",
                            menuType: "Nested",
                            categoryRows: [{
                                title: a.get("Label.Tops"),
                                name: "Tops",
                                subCategoryMenu: [{
                                    name: "T-Shirts",
                                    label: a.get("Label.TShirts"),
                                    assetType: "T-Shirt Accessory"
                                }, {
                                    name: "Shirts",
                                    label: a.get("Label.Shirts"),
                                    assetType: "Shirt Accessory"
                                }, {
                                    name: "Sweater",
                                    label: a.get("Label.Sweaters"),
                                    assetType: "Sweater Accessory"
                                }]
                            }, {
                                title: a.get("Label.Outerwear"),
                                name: "Outerwear",
                                subCategoryMenu: [{
                                    name: "Jackets",
                                    label: a.get("Label.Jackets"),
                                    assetType: "Jacket Accessory"
                                }]
                            }, {
                                title: a.get("Label.Bottoms"),
                                name: "Bottoms",
                                subCategoryMenu: [{
                                    name: "Pants",
                                    label: a.get("Label.Pants"),
                                    assetType: "Pants Accessory"
                                }, {
                                    name: "Shorts",
                                    label: a.get("Label.Shorts"),
                                    assetType: "Shorts Accessory"
                                }, {
                                    name: "Skirts",
                                    label: a.get("Label.DressesAndSkirts"),
                                    assetType: "Dress Skirt Accessory"
                                }]
                            }, {
                                title: a.get("Label.Shoes"),
                                name: "Shoes",
                                subCategoryMenu: [{
                                    name: "Left Shoe",
                                    label: a.get("Label.LeftShoes"),
                                    assetType: "Left Shoe Accessory"
                                }, {
                                    name: "Right Shoe",
                                    label: a.get("Label.RightShoes"),
                                    assetType: "Right Shoe Accessory"
                                }]
                            }, {
                                title: a.get("Label.Classic"),
                                name: "Classic",
                                subCategoryMenu: [{
                                    name: "Shirts",
                                    label: a.get("Label.ClassicShirts"),
                                    assetType: "Shirt"
                                }, {
                                    name: "Pants",
                                    label: a.get("Label.ClassicPants"),
                                    assetType: "Pants"
                                }, {
                                    name: "T-Shirts",
                                    label: a.get("Label.ClassicTShirts"),
                                    assetType: "T-Shirt"
                                }]
                            }]
                        },
                        {
                            label: a.get("Heading.Body"),
                            name: "Body",
                            tabType: "Assets",
                            subCategoryMenu: [{
                                name: "BodyColors",
                                label: a.get("Label.SkinTone"),
                                fullLabel: a.get("Label.SkinTone")
                            }, {
                                name: "Hair",
                                label: a.get("Label.Hair"),
                                fullLabel: a.get("Label.HairAccessories"),
                                assetType: "Hair Accessory"
                            }, {
                                name: "Head",
                                label: a.get("Label.Head"),
                                assetType: "Head",
                                fullLabel: a.get("Label.Heads")
                            }, {
                                name: "Face",
                                label: a.get("Label.Face"),
                                assetType: "Face",
                                fullLabel: a.get("Label.Faces")
                            }, {
                                name: "Torso",
                                label: a.get("Label.Torso"),
                                assetType: "Torso",
                                fullLabel: a.get("Label.Torsos")
                            }, {
                                name: "LeftArms",
                                label: a.get("Label.LeftArms"),
                                assetType: "Left Arm",
                                fullLabel: a.get("Label.LeftArms")
                            }, {
                                name: "RightArms",
                                label: a.get("Label.RightArms"),
                                assetType: "Right Arm",
                                fullLabel: a.get("Label.RightArms")
                            }, {
                                name: "LeftLegs",
                                label: a.get("Label.LeftLegs"),
                                assetType: "Left Leg",
                                fullLabel: a.get("Label.LeftLegs")
                            }, {
                                name: "RightLegs",
                                label: a.get("Label.RightLegs"),
                                assetType: "Right Leg",
                                fullLabel: a.get("Label.RightLegs")
                            }, {
                                name: "Scale",
                                label: a.get("Label.Scale"),
                                visible: !0
                            }, {
                                name: "Package",
                                label: a.get("Heading.Packages"),
                                assetType: "Package",
                                fullLabel: a.get("Heading.Packages"),
                                visible: !1
                            }]
                        }, {
                            label: a.get("Heading.Animations"),
                            name: "AvatarAnimations",
                            tabType: "Assets",
                            subCategoryMenu: [{
                                name: "Emote",
                                label: a.get("Heading.Emotes"),
                                fullLabel: a.get("Heading.Emotes"),
                                assetType: "Emote Animation",
                                visible: !0
                            }, {
                                name: "Walk",
                                label: a.get("Label.Walk"),
                                fullLabel: a.get("Label.WalkAnimations"),
                                assetType: "Walk Animation"
                            }, {
                                name: "Run",
                                label: a.get("Label.Run"),
                                fullLabel: a.get("Label.RunAnimations"),
                                assetType: "Run Animation"
                            }, {
                                name: "Fall",
                                label: a.get("Label.Fall"),
                                fullLabel: a.get("Label.FallAnimations"),
                                assetType: "Fall Animation"
                            }, {
                                name: "Jump",
                                label: a.get("Label.Jump"),
                                fullLabel: a.get("Label.JumpAnimations"),
                                assetType: "Jump Animation"
                            }, {
                                name: "Swim",
                                label: a.get("Label.Swim"),
                                fullLabel: a.get("Label.SwimAnimations"),
                                assetType: "Swim Animation"
                            }, {
                                name: "Climb",
                                label: a.get("Label.Climb"),
                                fullLabel: a.get("Label.ClimbAnimations"),
                                assetType: "Climb Animation"
                            }, {
                                name: "Idle",
                                label: a.get("Label.Idle"),
                                fullLabel: a.get("Label.IdleAnimations"),
                                assetType: "Idle Animation"
                            }]
                        }],
                        thumbnail: {
                            redrawFloodchecked: a.get("Message.RedrawFloodchecked"),
                            redrawThumbnailFailed: a.get("Message.RedrawThumbnailFailed"),
                            waitForThumbnailRegenerationInSeconds: 30,
                            useThreeDeeThumbsKey: "RobloxUse3DThumbnailsV2",
                            threeDeeButton: a.get("Action.ThreeDimensions"),
                            twoDeeButton: a.get("Action.TwoDimensions")
                        },
                        recent: {
                            couldNotLoadList: a.get("Message.FailedLoadRecent"),
                            emptyMessage: a.get("Message.EmptyRecentItems")
                        },
                        outfits: {
                            createNewOutfit: function(e) {
                                return "Outfit" === e ? a.get("Heading.CreateNewOutfit") : a.get("Heading.CreateNewCostume")
                            },
                            outfitMessages: {
                                renameOutfitTitle: a.get("Heading.RenameOutfit"),
                                renameOutfitDescription: a.get("Description.RenameOutfit"),
                                renameOutfitButton: a.get("Action.Rename"),
                                createOutfitTitle: a.get("Heading.CreateNewOutfit"),
                                createOutfitDescription: a.get("Description.CreateNewOutfit"),
                                createOutfitButton: a.get("Action.CreateNewOutfit"),
                                successfulRename: a.get("Message.SuccessRenameOutfit"),
                                successfulDelete: a.get("Message.SuccessDeleteOutfit"),
                                successfulUpdate: a.get("Message.SuccessUpdatedOutfit"),
                                successfulCreate: a.get("Message.SuccessCreateOutfit"),
                                successfulWear: a.get("Message.SuccessWoreOutfit"),
                                emptyMessage: a.get("Message.EmptyListOfOutfits"),
                                maxNumberOfOutfits: a.get("Message.ReachedMaxOutfits"),
                                errorCreatingOutfit: a.get("Message.ErrorCreateOutfit"),
                                invalidOutfitName: a.get("Message.InvalidOutfitName"),
                                updateFailedOutfitDelete: a.get("Message.FailedUpdateDeletedOutfit"),
                                errorUpdatingOutfit: a.get("Message.ErrorUpdateOutfit"),
                                errorDeletingOutfit: a.get("Message.FailedDeleteOutfit"),
                                errorRenamingOutfit: a.get("Message.ErrorRenameOutfit"),
                                errorWearingOutfit: a.get("Message.ErrorWearOutfit"),
                                failedToLoadOutfits: a.get("Message.ErrorLoadOutfits"),
                                nameInputPlaceholder: a.get("Label.NamePlaceholderOutfit")
                            },
                            costumeMessages: {
                                renameOutfitTitle: a.get("Heading.RenameCostume"),
                                renameOutfitDescription: a.get("Description.RenameCostume"),
                                renameOutfitButton: a.get("Action.Rename"),
                                createOutfitTitle: a.get("Heading.CreateNewCostume"),
                                createOutfitDescription: a.get("Description.CreateNewCostume"),
                                createOutfitButton: a.get("Action.CreateNewOutfit"),
                                successfulRename: a.get("Message.SuccessRenameCostume"),
                                successfulDelete: a.get("Message.SuccessDeleteCostume"),
                                successfulUpdate: a.get("Message.SuccessUpdatedCostume"),
                                successfulCreate: a.get("Message.SuccessCreateCostume"),
                                successfulWear: a.get("Message.SuccessWoreCostume"),
                                emptyMessage: a.get("Message.EmptyListOfCostumes"),
                                maxNumberOfOutfits: a.get("Message.ReachedMaxCostumes"),
                                errorCreatingOutfit: a.get("Message.ErrorCreateCostume"),
                                invalidOutfitName: a.get("Message.InvalidOutfitName"),
                                updateFailedOutfitDelete: a.get("Message.FailedUpdateDeletedCostume"),
                                errorUpdatingOutfit: a.get("Message.ErrorUpdateCostume"),
                                errorDeletingOutfit: a.get("Message.FailedDeleteCostume"),
                                errorRenamingOutfit: a.get("Message.ErrorRenameCostume"),
                                errorWearingOutfit: a.get("Message.ErrorWearCostume"),
                                failedToLoadOutfits: a.get("Message.ErrorLoadCostume"),
                                nameInputPlaceholder: a.get("Label.NamePlaceholderCostume")
                            },
                            countNumbersInEnglish: ["zero", "one", "two", "three", "four", "five"],
                            missingItemsFromOutfit: function(e) {
                                return a.get("Message.MissingItemsFromOutfit", {
                                    number: e
                                })
                            },
                            menuOptions: [{
                                label: a.get("Action.Update"),
                                name: "Update"
                            }, {
                                label: a.get("Action.Rename"),
                                name: "Rename"
                            }, {
                                label: a.get("Action.Delete"),
                                name: "Delete"
                            }, {
                                label: a.get("Action.Cancel"),
                                name: "Cancel"
                            }],
                            outfitErrorCodes: {
                                maxOutfits: 1,
                                invalidBodyColors: 3,
                                invalidOutfitName: 4,
                                unwearableAsset: 5,
                                internalError: 6
                            }
                        },
                        packages: {
                            errorWearingPackage: a.get("Message.FailedWearPackage")
                        },
                        assets: {
                            savedAdvancedAccessories: a.get("Message.SuccessSavedAccessories"),
                            emptyMessage: function(e) {
                                return a.get("Message.EmptyListForItem", {
                                    itemType: e
                                })
                            },
                            couldNotLoadList: a.get("Message.FailedLoadAssets"),
                            errorUpdatingItems: a.get("Message.ErrorUpdateWorn"),
                            maxAccessories: 10
                        },
                        scales: {
                            failedToUpdate: a.get("Message.FailedUpdateScales")
                        },
                        avatarType: {
                            failedToUpdate: a.get("Message.FailedUpdateType"),
                            defaultOnPageLoad: "R15",
                            avatarTypes: ["R6", "R15"]
                        },
                        bodyColors: {
                            failedToUpdate: a.get("Message.FailedUpdateBodyColor"),
                            palette: [{
                                brickColorId: 364,
                                hexColor: "#5A4C42"
                            }, {
                                brickColorId: 217,
                                hexColor: "#7C5C46"
                            }, {
                                brickColorId: 359,
                                hexColor: "#AF9483"
                            }, {
                                brickColorId: 18,
                                hexColor: "#CC8E69"
                            }, {
                                brickColorId: 125,
                                hexColor: "#EAB892"
                            }, {
                                brickColorId: 361,
                                hexColor: "#564236"
                            }, {
                                brickColorId: 192,
                                hexColor: "#694028"
                            }, {
                                brickColorId: 351,
                                hexColor: "#BC9B5D"
                            }, {
                                brickColorId: 352,
                                hexColor: "#C7AC78"
                            }, {
                                brickColorId: 5,
                                hexColor: "#D7C59A"
                            }, {
                                brickColorId: 153,
                                hexColor: "#957977"
                            }, {
                                brickColorId: 1007,
                                hexColor: "#A34B4B"
                            }, {
                                brickColorId: 101,
                                hexColor: "#DA867A"
                            }, {
                                brickColorId: 1025,
                                hexColor: "#FFC9C9"
                            }, {
                                brickColorId: 330,
                                hexColor: "#FF98DC"
                            }, {
                                brickColorId: 135,
                                hexColor: "#74869D"
                            }, {
                                brickColorId: 305,
                                hexColor: "#527CAE"
                            }, {
                                brickColorId: 11,
                                hexColor: "#80BBDC"
                            }, {
                                brickColorId: 1026,
                                hexColor: "#B1A7FF"
                            }, {
                                brickColorId: 321,
                                hexColor: "#A75E9B"
                            }, {
                                brickColorId: 107,
                                hexColor: "#008F9C"
                            }, {
                                brickColorId: 310,
                                hexColor: "#5B9A4C"
                            }, {
                                brickColorId: 317,
                                hexColor: "#7C9C6B"
                            }, {
                                brickColorId: 29,
                                hexColor: "#A1C48C"
                            }, {
                                brickColorId: 105,
                                hexColor: "#E29B40"
                            }, {
                                brickColorId: 24,
                                hexColor: "#F5CD30"
                            }, {
                                brickColorId: 334,
                                hexColor: "#F8D96D"
                            }, {
                                brickColorId: 199,
                                hexColor: "#635F62"
                            }, {
                                brickColorId: 1002,
                                hexColor: "#CDCDCD"
                            }, {
                                brickColorId: 1001,
                                hexColor: "#F8F8F8"
                            }]
                        },
                        bodyParts: {
                            all: a.get("Label.All"),
                            head: a.get("Label.Head"),
                            torso: a.get("Label.Torso"),
                            leftArm: a.get("Label.LeftArm"),
                            rightArm: a.get("Label.RightArm"),
                            leftLeg: a.get("Label.LeftLeg"),
                            rightLeg: a.get("Label.RightLeg")
                        },
                        bodyScaling: {
                            height: a.get("Label.Height"),
                            width: a.get("Label.Width"),
                            head: a.get("Label.Head"),
                            bodyType: a.get("Label.BodyType"),
                            proportions: a.get("Label.Proportions")
                        },
                        bodyScalingType: {
                            height: "Height",
                            width: "Width",
                            head: "Head",
                            bodyType: "BodyType",
                            proportions: "Proportions"
                        },
                        googleAnalytics: {
                            category: "AvatarPage",
                            advancedAccessoriesAction: "AdvancedAccessories",
                            advancedBodyColorsAction: "AdvancedBodyColors",
                            openLabel: "Open",
                            closeLabel: "Close",
                            saveLabel: "Save",
                            saveFailedLabel: "SaveFailed"
                        },
                        defaultClothing: {
                            wearClothing: a.get("Message.DefaultClothing"),
                            displayTimeInMilliseconds: 5e3
                        },
                        modalLayout: {
                            outfitUpdate: {
                                titlePrefix: function(e) {
                                    return "Outfit" === e ? a.get("Heading.UpdateOutfit") : a.get("Heading.UpdateCostume")
                                },
                                bodyText: function(e) {
                                    return "Outfit" === e ? a.get("Message.UpdateThisOutfit") : a.get("Message.UpdateThisCostume")
                                },
                                confirmBtnName: a.get("Action.Update"),
                                cancelBtnName: a.get("Action.Cancel"),
                                confirmBtnId: "purchaseConfirm"
                            },
                            outfitDelete: {
                                titlePrefix: function(e) {
                                    return "Outfit" === e ? a.get("Heading.DeleteOutfit") : a.get("Heading.DeleteCostume")
                                },
                                bodyText: function(e) {
                                    return "Outfit" === e ? a.get("Message.DeleteThisOutfit") : a.get("Message.DeleteThisCostume")
                                },
                                confirmBtnName: a.get("Action.Delete"),
                                cancelBtnName: a.get("Action.Cancel"),
                                confirmBtnId: "purchaseConfirm"
                            },
                            advancedAccessoriesDoubleCheck: {
                                title: a.get("Heading.AccessoriesChange"),
                                bodyText: a.get("Message.AccessoriesChange"),
                                confirmBtnName: a.get("Action.Save"),
                                cancelBtnName: a.get("Action.Cancel")
                            }
                        },
                        emotes: {
                            assetType: "Emote Animation",
                            emotesInstructions: a.get("Message.EmotesInstructions"),
                            successfulDelete: a.get("Message.SuccessUnequipEmote"),
                            successfulUpdate: a.get("Message.SuccessEquipEmote"),
                            errorUpdatingEmote: a.get("Message.ErrorEquipEmote"),
                            errorDeletingEmote: a.get("Message.ErrorDeleteEmote"),
                            errorGettingEmotes: a.get("Message.ErrorLoadEmotes")
                        },
                        advancedEditor: {
                            unsupportedAdvancedEditorAssetType: function(e) {
                                return a.get("Message.ErrorAdvancedUnsupportedAssetType", {
                                    assetType: a.get(e)
                                })
                            },
                            overLimitAdvancedEditorAssetType: function(e, t) {
                                return a.get("Message.ErrorAdvancedSave", {
                                    limitAmount: e,
                                    assetType: a.get(t)
                                })
                            }
                        }
                    }
                }
                s.$inject = ["languageResource"], a.Z.factory("avatarConstantService", s), t.default = s
            },
            2657: function(e, t, a) {
                "use strict";
                a.r(t);
                var i = a(792),
                    a = a(9681);

                function s(s) {
                    function n(e, t) {
                        t.min = 100 * e.min, t.max = 100 * e.max
                    }
                    return {
                        scales: {
                            height: {
                                label: s.bodyScaling.height,
                                min: 0,
                                max: 100,
                                value: 100,
                                increment: 5,
                                type: s.bodyScalingType.height
                            },
                            width: {
                                label: s.bodyScaling.width,
                                min: 0,
                                max: 100,
                                value: 100,
                                increment: 5,
                                type: s.bodyScalingType.width
                            },
                            head: {
                                label: s.bodyScaling.head,
                                min: 0,
                                max: 100,
                                value: 100,
                                increment: 5,
                                type: s.bodyScalingType.head
                            }
                        },
                        getScales: function() {
                            return this.scales
                        },
                        applyCurrentScale: function(e, t) {
                            this.scales.height.value = 100 * e.scales.height, this.scales.width.value = 100 * e.scales.width, this.scales.head.value = 100 * e.scales.head, t && (this.scales.proportion.value = 100 * e.scales.proportion, this.scales.bodyType.value = 100 * e.scales.bodyType)
                        },
                        updateScales: function(e, t) {
                            this.scales.height.value = e.height.value, this.scales.width.value = e.width.value, this.scales.head.value = e.head.value, t && (this.scales.proportion.value = e.proportion.value, this.scales.bodyType.value = e.bodyType.value)
                        },
                        initializeScaleMetrics: function(e, t, a) {
                            a && (this.scales.bodyType = {
                                label: i.Lang.AvatarResources["Label.BodyType"],
                                min: 0,
                                max: 100,
                                value: 0,
                                increment: 5,
                                type: s.bodyScalingType.bodyType
                            }, this.scales.proportion = {
                                label: s.bodyScaling.proportions,
                                min: 0,
                                max: 100,
                                value: 0,
                                increment: 5,
                                type: s.bodyScalingType.proportions
                            }), this.scales.height.increment = 100 * t.scaleHeightIncrement, this.scales.width.increment = 100 * t.scaleWidthIncrement, this.scales.head.increment = 100 * t.scaleHeadIncrement, n(e.scales.height, this.scales.height), n(e.scales.width, this.scales.width), n(e.scales.head, this.scales.head), a && (n(e.scales.proportion, this.scales.proportion), n(e.scales.bodyType, this.scales.bodyType))
                        }
                    }
                }
                s.$inject = ["avatarConstantService"], a.Z.factory("avatarScaleService", s), t.default = s
            },
            6263: function(e, t, a) {
                "use strict";
                a.r(t);
                var m = a(792),
                    a = a(9681);

                function s(a, i, e) {
                    var s = m.EnvironmentUrls.avatarApi,
                        n = m.EnvironmentUrls.catalogApi,
                        o = m.EnvironmentUrls.inventoryApi,
                        r = (m.EnvironmentUrls.thumbnailApi, e.avatarApi),
                        l = e.catalogApi,
                        c = e.inventoryApi;
                    e.thumbnailApi, e.www;

                    function d(e, t) {
                        return s + m.Endpoints.generateAbsoluteUrl(e, t, !0)
                    }

                    function u(e, t) {
                        return n + m.Endpoints.generateAbsoluteUrl(e, t, !0)
                    }
                    return {
                        avatarApi: function(e, t) {
                            return this.avatarDomain + m.Endpoints.generateAbsoluteUrl(e, t, !0)
                        },
                        getOutfitDetails: function(e) {
                            e = {
                                url: d(r.getOutfitDetailsUrl, {
                                    id: e
                                })
                            };
                            return i.httpGet(e, {})
                        },
                        createOutfit: function(e, t, a, s) {
                            var n = {
                                    url: d(r.createOutfitUrl),
                                    withCredentials: !0
                                },
                                s = {
                                    name: e,
                                    bodyColors: t,
                                    assets: a,
                                    scale: s
                                };
                            return i.httpPost(n, s)
                        },
                        patchOutfit: function(e, t) {
                            a.debug("Patch outfit");
                            e = {
                                url: d(r.patchOutfitUrl, {
                                    id: e
                                }),
                                withCredentials: !0
                            };
                            return i.httpPatch(e, t)
                        },
                        deleteOutfit: function(e) {
                            e = {
                                url: d(r.deleteOutfitUrl, {
                                    id: e
                                }),
                                withCredentials: !0
                            };
                            return i.httpPost(e, {})
                        },
                        getOutfits: function(e, t, a, s) {
                            e = {
                                url: d(r.getOutfitsUrl, {
                                    userId: e
                                }),
                                retryable: !0
                            }, s = {
                                itemsPerPage: a,
                                page: t,
                                isEditable: s
                            };
                            return i.httpGet(e, s)
                        },
                        setBodyColors: function(e) {
                            var t = {
                                url: d(r.setBodyColorsUrl),
                                withCredentials: !0
                            };
                            return i.httpPost(t, e)
                        },
                        setWearingAssets: function(e) {
                            var t = {
                                    url: d(r.setWearingAssetsUrl),
                                    withCredentials: !0
                                },
                                e = {
                                    assetIds: e
                                };
                            return i.httpPost(t, e)
                        },
                        setWearingAssetsV2: function(e) {
                            var t = {
                                    url: d(r.setWearingAssetsUrlV2),
                                    withCredentials: !0
                                },
                                e = {
                                    assets: e
                                };
                            return i.httpPost(t, e)
                        },
                        wearAsset: function(e) {
                            e = {
                                url: d(r.wearAssetUrl, {
                                    id: e
                                }),
                                withCredentials: !0
                            };
                            return i.httpPost(e, {})
                        },
                        removeAsset: function(e) {
                            e = {
                                url: d(r.removeAssetUrl, {
                                    id: e
                                }),
                                withCredentials: !0
                            };
                            return i.httpPost(e, {})
                        },
                        wearOutfit: function(e) {
                            e = {
                                url: d(r.wearOutfitUrl, {
                                    id: e
                                }),
                                withCredentials: !0
                            };
                            return i.httpPost(e, {})
                        },
                        getAvatar: function(e) {
                            void 0 === e && (e = !0);
                            e = {
                                url: d(r.getAvatarUrl),
                                withCredentials: !0,
                                retryable: e
                            };
                            return i.httpGet(e, {})
                        },
                        getRules: function() {
                            var e = {
                                url: d(r.getAvatarRulesUrl)
                            };
                            return i.httpGet(e, {})
                        },
                        setScales: function(e) {
                            var t = {
                                url: d(r.setScalesUrl),
                                withCredentials: !0
                            };
                            return i.httpPost(t, e)
                        },
                        setAvatarType: function(e) {
                            var t = {
                                    url: d(r.setAvatarTypeUrl),
                                    withCredentials: !0
                                },
                                e = {
                                    playerAvatarType: e
                                };
                            return i.httpPost(t, e)
                        },
                        getRecentItems: function(e) {
                            e = {
                                url: d(r.getRecentItemsUrl, {
                                    type: e
                                }),
                                withCredentials: !0,
                                retryable: !0
                            };
                            return i.httpGet(e, {})
                        },
                        redrawThumbnail: function() {
                            var e = {
                                url: d(r.redrawThumbnailUrl),
                                withCredentials: !0,
                                retryable: !1
                            };
                            return i.httpPost(e, {})
                        },
                        getMetaData: function(e) {
                            void 0 === e && (e = !0);
                            e = {
                                url: d(r.getMetaData),
                                withCredentials: !0,
                                retryable: e
                            };
                            return i.httpGet(e, {})
                        },
                        getCategories: function() {
                            var e = {
                                url: u(l.getCategories)
                            };
                            return i.httpGet(e, {})
                        },
                        getSubcategories: function() {
                            var e = {
                                url: u(l.getSubcategories)
                            };
                            return i.httpGet(e, {})
                        },
                        postItemDetails: function(e, t) {
                            var a = {
                                    url: u(l.postItemDetails),
                                    withCredentials: !0
                                },
                                s = {
                                    items: []
                                };
                            return e.forEach(function(e) {
                                s.items.push({
                                    itemType: t,
                                    id: e.assetId
                                })
                            }), i.httpPost(a, s)
                        },
                        getEmotes: function() {
                            var e = {
                                url: d(r.getEmotesUrl)
                            };
                            return i.httpGet(e, {})
                        },
                        equipEmote: function(e, t) {
                            t = {
                                url: d(r.equipEmoteUrl, {
                                    assetId: e,
                                    position: t
                                })
                            };
                            return i.httpPost(t)
                        },
                        unequipEmote: function(e) {
                            e = {
                                url: d(r.unequipEmoteUrl, {
                                    position: e
                                })
                            };
                            return i.httpDelete(e)
                        },
                        getInventoryUrl: function(e) {
                            return t = c.getInventory, e = {
                                userId: e
                            }, o + m.Endpoints.generateAbsoluteUrl(t, e, !0);
                            var t
                        }
                    }
                }
                s.$inject = ["$log", "httpService", "avatarUrlConstants"], a.Z.factory("avatarService", s), t.default = s
            },
            8631: function(e, t, a) {
                "use strict";

                function s() {
                    return {
                        assetTypeLookup: {},
                        assetTypeNameLookup: {},
                        setAssetTypeLookups: function(e) {
                            for (var t = 0; t < e.length; t++) {
                                var a = e[t];
                                this.assetTypeLookup[a.id] = a, this.assetTypeNameLookup[a.name] = a
                            }
                        },
                        getAssetTypeName: function(e) {
                            e = this.assetTypeLookup[e];
                            return e && e.name ? e.name : null
                        },
                        getAssetTypeByName: function(e) {
                            return this.assetTypeNameLookup[e]
                        }
                    }
                }
                a.r(t), a(9681).Z.factory("avatarTypeService", s), t.default = s
            },
            8824: function(e, t, a) {
                "use strict";
                a.r(t), a.d(t, {
                    default: function() {
                        return o
                    }
                });
                var s = CoreUtilities,
                    n = a(479);

                function i() {
                    return {
                        getABTestEnrollment: function(e, t, a) {
                            return s.httpService.get(n.default.url.getExperimentationValues(e, t, a))
                        }
                    }
                }
                a(9681).Z.factory("experimentationService", i);
                var o = i
            },
            9418: function(e) {
                e.exports = '<div class="modal-content advanced-modal"> <div class="modal-header"> <button type="button" class="close" ng-click="close()"> <span aria-hidden="true"><span class="icon-close"></span></span><span class="sr-only">{{ "Action.Close" | translate }}</span> </button> <h5>{{ "Heading.AdvancedOptions" | translate }}</h5> </div> <div class="modal-body"> <div ng-repeat="slot in params.advancedAccessorySlots" ng-class="{\'form-has-error\': !slot.valid}" class="advanced-accessory-group form-group"> <input ng-model="slot.id" ng-change="params.onChange(slot)" class="form-control input-field" placeholder="{{ \'Label.AssetIDPlaceholder\' | translate }}"/> </div> </div> <div class="modal-footer"> <button class="btn-secondary-md btn-min-width" ng-click="params.onSaveClick(submit)">{{ "Action.Save" | translate }}</button> <button class="btn-control-md btn-min-width" ng-click="close()">{{ "Action.Cancel" | translate }}</button> </div> </div>'
            },
            6974: function(e) {
                e.exports = '<div id="advanced-body-colors" class="advanced-modal modal-content"> <div class="modal-header"> <button type="button" class="close" ng-click="close()"> <span aria-hidden="true"><span class="icon-close"></span></span><span class="sr-only">{{"Action.Close" | translate}}</span> </button> <h5>{{ "Heading.SkinToneBodyParts" | translate}}</h5> </div> <div class="modal-body"> <div class="bodycolors-radio-list"> <div ng-repeat="bodyPart in params.bodyParts" class="radio"> <input type="radio" ng-model="params.selectedBodyPart" name="radio1" id="radio-{{bodyPart.name}}" ng-value="bodyPart"/> <label for="radio-{{bodyPart.name}}">{{bodyPart.label}}</label> </div> </div> <div class="bodycolors-list-sm"> <div ng-repeat="bodyColor in params.colorsPalette" class="color-dot" ng-click="params.onColorDotClicked(bodyColor, params.selectedBodyPart)" ng-class="{active: params.isColorSelected(bodyColor)}" ng-style="{\'background-color\': bodyColor.hexColor}"></div> </div> </div> <div class="modal-footer"> <button class="btn-control-md btn-min-width" ng-click="close()">{{ "Action.Done" | translate }}</button> </div> </div>'
            },
            7674: function(e) {
                e.exports = '<div class="modal-content"> <div class="modal-header"> <button type="button" class="close" ng-click="close()"> <span aria-hidden="true"><span class="icon-close"></span></span><span class="sr-only">{{ "Action.Close" | translate }}</span> </button> <h5>{{ "Heading.EquipEmotes" | translate }}</h5> </div> <div class="modal-body"> <div class="emotes-radial-menu" ng-mouseleave="resetHoveredPosition()"> <div class="emotes-radial-background-layer"> <div ng-show="hoveredPositionIndex !== null" ng-class="[(\'emotes-radial-slice-\' + (hoveredPositionIndex - 1)), {\'\' : hoveredPositionIndex !== null}]" class="emotes-radial-selected-position-image"> </div> <div class="emotes-radial-img"></div> <div ng-show="selectedAssetId === null && selectedPositionIndex === null" class="text-emphasis emotes-radial-middle-text emotes-center-div"> {{ "Message.ChooseEmoteSlotOrEmote" | translate }} </div> <div ng-show="selectedAssetId === null && selectedPositionIndex !== null" class="text-emphasis emotes-radial-middle-text emotes-center-div"> {{ "Message.ChooseEmote" | translate }} </div> <div ng-show="selectedAssetId !== null && selectedPositionIndex === null" class="text-emphasis emotes-radial-middle-text emotes-center-div"> {{ "Message.ChooseEmoteSlot" | translate }} </div> </div> <div class="emotes-radial-menu-offset"> <div ng-repeat="(key, slice) in radialSlices | orderObjectBy:\'position\'" class="emotes-radial-slice-container"> <div class="text-emphasis emotes-radial-slice emotes-radial-slice-{{ $index }}"> <div ng-click="onEmotesPositionClick(slice.position, slice.isEmpty)" ng-mouseover="onHoverPosition(slice.position)" class="emotes-radial-button"> <div ng-if="!slice.isEmpty" class="emotes-radial-icon emotes-radial-inverse-{{ $index }}"> <thumbnail-2d class="emotes-radial-thumb" ng-class="{\'slice-is-hovered\' : hoveredPositionIndex === slice.position}" thumbnail-type="thumbnailTypes.assetThumbnail" thumbnail-target-id="slice.assetId"></thumbnail-2d> </div> <div class="emotes-radial-index emotes-radial-inverse-{{ $index }}">{{ slice.position }}</div> <div ng-show="selectedPositionIndex === slice.position || (selectedAssetId !== null && hoveredPositionIndex === slice.position)" class="emotes-on-state-icon"></div> </div> </div> </div> </div> </div> <div> <div> {{ "Label.YourEmotes" | translate }} </div> <div class="emotes-grid"> <div ng-controller="avatarItemsController" ng-init="initEmotes(emotesModalData)"> <div class="items-list" infinite-scroll="getNextPage()"> <ul class="hlist item-cards-stackable"> <li ng-show="isRequestDelete" class="list-item item-card delete-confirmation-card" ng-click="confirmDelete()"> <div class="item-card-container"> <div class="item-card-link"> <div class="item-card-thumb-container"> <div class="emotes-center-div"> <div class="icon-close"></div> </div> </div> </div> </div> </li> <li ng-repeat="item in items" class="list-item item-card" ng-class="{\'five-column\' : !avatarLibrary.metaData.isCategoryReorgEnabled, \'six-column\' : avatarLibrary.metaData.isCategoryReorgEnabled}"> <div emotes-item-card></div> </li> </ul> </div> <div ng-show="loading" loading-animated></div> <div ng-show="!loading && items.length === 0" class="col-xs-12 section-content-off"> {{ emptyMessage }} </div> </div> </div> </div> </div> <div class="modal-footer"> </div> </div>'
            },
            4665: function(e) {
                e.exports = '<div class="modal-content"> <div class="modal-header"> <button type="button" class="close" ng-click="close()"> <span aria-hidden="true"><span class="icon-close"></span></span> <span class="sr-only">{{ "Action.Close" | translate }}</span> </button> <h5>{{ params.title }}</h5> </div> <form name="nameForm"> <div class="modal-body"> <p class="font-caption-header text-description">{{ params.description }}</p> <div ng-class="{\'form-has-error\': nameForm.outfitName.$invalid && !nameForm.outfitName.$pristine, \'form-has-feedback\': nameForm.outfitName.$valid && !nameForm.outfitName.$pristine }" id="outfit-name-group" class="form-group"> <input name="outfitName" type="text" focus-me="true" ng-model="outfitName" ng-pattern="/^[A-Z0-9 ]+$/i" required class="form-control input-field" placeholder="{{ params.nameInputPlaceholder }}" autocomplete="off"/> <p ng-class="{\'invisible\': !nameForm.outfitName.$invalid || nameForm.outfitName.$pristine }" class="form-control-label">{{ "Message.ErrorOutfitName" | translate }}</p> </div> </div> <div class="modal-footer"> <button ng-disabled="nameForm.$invalid || nameForm.outfitName.$pristine" class="btn-secondary-md btn-min-width" ng-click="submit()" id="submit">{{ params.buttonName }}</button> <button class="btn-control-md btn-min-width" ng-click="close()">{{ "Action.Cancel" | translate }}</button> </div> </form> </div>'
            },
            5201: function(e) {
                e.exports = '<div class="avatar-back"> <div ng-show="(selectedMenu.name === \'Hats\')" class="hat-slots"> <div title="{{ \'Message.HatLimitTooltip\' | translate }}" ng-repeat="slot in hatSlots" class="hat-slot"> <thumbnail-2d ng-if="!slot.empty" ng-click="onHatSlotClicked(slot)" thumbnail-target-id="slot.id" thumbnail-type="slot.thumbnailType"> </thumbnail-2d> </div> </div> <div class="avatar-thumbnail" ng-class="{\'slots-visible\': (selectedMenu.name === \'Hats\')}"> <div id="UserAvatar" class="3d-thumbs-enabled thumbnail-holder delayed-thumbnail-holder" ng-class="{\'3d-thumbs-enabled\': avatarDataModel.areThreeDeeThumbsEnabled}"> <thumbnail-3d ng-if="!isThumbnailLoading && threeDToggleData.is3d " target-id="avatarDataModel.userId" on-success="avatarDataModel.on3dAvatarSuccess" on-failure="avatarDataModel.on3dAvatarFailure"> </thumbnail-3d> <thumbnail-2d ng-if="!isThumbnailLoading && !threeDToggleData.is3d" thumbnail-target-id="avatarDataModel.userId" thumbnail-type="avatarDataModel.thumbnailType" thumbnail-options="avatarDataModel.thumbnailOptions" on-success="avatarDataModel.on2dAvatarSuccess" on-failure="avatarDataModel.on2dAvatarFailure"> </thumbnail-2d> <div ng-if="isThumbnailLoading" class="thumbnail-loader"><span class="spinner spinner-default"></span></div> <span class="toggle-three-dee btn-control btn-control-small" ng-click="toggleThreeDee()">{{ threeDToggleData.avatarToggleButton }}</span> </div> </div> <div toast toast-layout="toastLayout"></div> </div> '
            },
            3594: function(e) {
                e.exports = '<div ng-controller="avatarController"> <div page-focus focus-gained="pageFocused(secondsIdle)"></div> <div class="alert-system-feedback"> <div class="alert alert-warning"> <span class="alert-context">{{ "Message.Warning" | translate }}</span> <span id="close" class="icon-close-white"></span> </div> </div> <div class="alert-system-feedback"> <div class="alert alert-loading">{{ "Message.Loading" | translate }}</div> </div> <div class="alert-system-feedback"> <div class="alert alert-success">{{ "Message.Success" | translate }}</div> </div> <div class="avatar-editor-header"> <h1>{{ "Heading.AvatarPageTitle" | translate }}</h1> <div class="catalog-header"> <div>{{ "Label.ExploreAvatarShop" | translate }}</div> <a ng-href="{{avatarDataModel.catalogPageUrl}}" class="btn-primary-md">{{ "Action.GetMore" | translate }}</a> </div> </div> <div class="left-wrapper-placeholder"> <div class="left-wrapper"> <div class="section-content remove-panel"> <div avatar-back></div> <div ng-controller="avatarScaleController" ng-if="avatarDataModel.isBodyTypeScaleOutOfTab" class="section-sliders"> <div ng-class="{ \'invisible\': !$parent.pageLoaded }" class="scale-container"> <div class="text-label font-subheader-1">{{scales.bodyType.label}}</div> <div class="scale-label font-body">{{ (scales.bodyType.value / 100) | percentage:0 }}%</div> <input type="range" on-input-finished="updateScales()" class="pr{{ (scales.bodyType.value-scales.bodyType.min) / (scales.bodyType.max-scales.bodyType.min) | percentage:0 | round:4 }}" id="{{scales.bodyType.label | lowercase}}-scale" ng-disabled="!avatarDataModel.scaleEnabled" step="{{scales.bodyType.increment}}" min="{{scales.bodyType.min}}" max="{{scales.bodyType.max}}" ng-model="scales.bodyType.value"/> </div> </div> <div avatar-scaling ng-if="!avatarDataModel.isAvatarScaleEmbeddedInTab"></div> </div> <div class="redraw-avatar"> <span ng-hide="redrawFloodchecked">{{ "Label.AskIfLoadingCorrectly" | translate }}</span> <span ng-show="redrawFloodchecked">{{ "Label.RedrawUnavailable" | translate }}</span> <a ng-disabled="redrawFloodchecked" ng-click="redrawThumbnail()" class="text-link">{{ "Action.Redraw" | translate }}</a> </div> </div> </div> <div ng-if="!pageLoaded" class="right-panel" ng-class="{ \'col-xs-8\': !avatarLibrary.metaData.isCategoryReorgEnabled, \'five-column\' : !avatarLibrary.metaData.isCategoryReorgEnabled, \'six-column\' : avatarLibrary.metaData.isCategoryReorgEnabled}"> <div loading-animated></div> </div> <div class="right-panel" ng-class="{ \'invisible\': !pageLoaded, \'col-xs-8\': !avatarLibrary.metaData.isCategoryReorgEnabled, \'five-column\' : !avatarLibrary.metaData.isCategoryReorgEnabled, \'six-column\' : avatarLibrary.metaData.isCategoryReorgEnabled}"> <div class="right-wrapper-placeholder" ng-class="{ \'right-wrapper-placeholder-five-column\' : !avatarLibrary.metaData.isCategoryReorgEnabled, \'right-wrapper-placeholder-six-column\' : avatarLibrary.metaData.isCategoryReorgEnabled}"> <div class="right-wrapper" ng-class="{ \'right-wrapper-five-column\' : !avatarLibrary.metaData.isCategoryReorgEnabled, \'right-wrapper-six-column\' : avatarLibrary.metaData.isCategoryReorgEnabled}" avatar-editor-tabs></div> </div> <div class="tab-content rbx-tab-content"> <div id="tab-content-top"></div> <div avatar-tab-content-header></div> <div avatar-tab-content class="tab-content"></div> </div> </div> </div> '
            },
            1263: function(e) {
                e.exports = '<div ng-mouseleave="mouseLeftTabMenu()" class="tab-wrapper"> <div class="rbx-tabs-horizontal" ng-class="{\'rbx-tabs-horizontal-five-column\' : !avatarLibrary.metaData.isCategoryReorgEnabled, \'rbx-tabs-horizontal-six-column\' : avatarLibrary.metaData.isCategoryReorgEnabled}"> <ul id="horizontal-tabs" class="nav nav-tabs" role="tablist"> <li blur-target="tab" on-blur="onTabBlur(tab)" class="rbx-tab" ng-repeat="tab in tabs" ng-hide="tab.visible === false" ng-class="{\'active\': ((tab === selectedTab && !(tabWithOpenMenu && tabWithOpenMenu.active)) || tab.active), \'five-tab\' : !avatarLibrary.metaData.isCategoryReorgEnabled, \'six-tab\' : avatarLibrary.metaData.isCategoryReorgEnabled}"> <a ng-mouseover="onTabHover(tab)" ng-click="onTabClick(tab)" class="rbx-tab-heading" id="{{ tab.label | lowercase }}-dropdown"> <span class="text-lead">{{ tab.label }}<span ng-hide="(tab.subCategoryMenu.length === 0)" class="icon-down"></span></span> </a> </li> </ul> </div> <div ng-show="isMenuOpen && tabWithOpenMenu !== null && (tabWithOpenMenu.subCategoryMenu.length > 0 || tabWithOpenMenu.categoryRows.length > 0)" class="tab-horizontal-submenu section-content" ng-class="{\'five-column\' : !avatarLibrary.metaData.isCategoryReorgEnabled, \'six-column\' : avatarLibrary.metaData.isCategoryReorgEnabled}"> <div ng-if="tabWithOpenMenu.menuType === \'Nested\'" ng-repeat="row in tabWithOpenMenu.categoryRows" class="submenu-row" ng-hide="row.visible === false"> <li class="text text-overflow text-label" ng-click="onRowDropdownClick(row, tabWithOpenMenu)">{{ row.title }}</li> <ul> <li ng-repeat="menu in row.subCategoryMenu" ng-hide="menu.visible === false" ng-click="onMenuClick(tabWithOpenMenu,menu,row)" ng-class="{\'active\': (menu === selectedMenu)}" class="text"> {{ menu.label }} </li> </ul> </div> <div ng-if="tabWithOpenMenu.menuType !== \'Nested\'"> <ul> <li ng-repeat="menu in tabWithOpenMenu.subCategoryMenu" ng-hide="menu.visible === false" ng-click="onMenuClick(tabWithOpenMenu,menu)" ng-class="{\'active\': (menu === selectedMenu)}" class="text"> {{ menu.label }} </li> </ul> </div> </div> </div>'
            },
            1427: function(e) {
                e.exports = '<div class="item-card-container remove-panel" ng-disabled="avatarCallLimiter.itemCardsDisabled" ng-class="{\'outfit-card\':item.type === \'Outfit\', \'locked-card\':avatarCallLimiter.itemCardsDisabled}"> <div class="item-card-link"> <a href="{{item.link}}" ng-click="onItemClicked(item,$event)" class="item-card-thumb-container" ng-class="{\'text-secondary\':avatarCallLimiter.itemCardsDisabled}" data-item-name="{{item.name}}"> <thumbnail-2d class="item-card-thumb" ng-class="{\'shimmer\':avatarCallLimiter.itemCardsDisabled}" thumbnail-target-id="item.id" thumbnail-type="item.thumbnailType"> </thumbnail-2d> </a> </div> <div class="item-card-caption"> <div ng-show="item.selected && isAssetTypeSelectionEnabled(item.assetType.name)" class="item-card-equipped" data-item-status="equipped"> <div class="item-card-equipped-label"></div> <span class="icon-check-selection"></span> </div> <div ng-if="item.type === \'Outfit\'" ng-class="{active:item.active}" class="item-card-menu" blur-target="item" on-blur> <button ng-repeat="option in outfitMenuOptions" ng-click="onItemMenuButtonClicked($event,item,option)" type="button" class="btn-secondary-xs">{{option.label}}</button> </div> <a href="{{item.link}}" class="item-card-name-link"> <div title="{{item.name}}" class="text-overflow item-card-name">{{item.name}}</div> </a> <span ng-if="item.type === \'Outfit\' && item.isEditable === true" ng-click="openOutfitMenu(item)" class="icon-settings-16x16 edit-outfit" data-item-name="{{item.name}}"></span> </div> </div>'
            },
            6443: function(e) {
                e.exports = '<div class="items-list avatar-item-list"> <ul class="hlist item-cards-stackable"> <li ng-repeat="item in items" class="list-item item-card" ng-class="{\'five-column\' : !avatarLibrary.metaData.isCategoryReorgEnabled, \'six-column\' : avatarLibrary.metaData.isCategoryReorgEnabled}"> <div avatar-item-card></div> </li> </ul> </div> <div ng-show="loading" loading-animated></div> <div ng-show="!loading && items.length === 0" class="col-xs-12 section-content-off"> <div ng-if="isOutfitCostumeMessage"> {{ emptyMessage() }} </div> <div ng-if="!isOutfitCostumeMessage"> {{ emptyMessage }} </div> </div>'
            },
            1302: function(e) {
                e.exports = '<h4 class="scaling-info"> {{ "Heading.Scaling" | translate }} <span class="tooltip-container" data-toggle="tooltip" title="{{ \'Message.SelectEnableScaling\' | translate }}"> <span class="icon-moreinfo-16x16"></span> </span> </h4> <div class="avatar-type-container"> <div class="text-label font-subheader-1">{{ "Label.BodyType" | translate }}</div> <div ng-controller="avatarTypeController" ng-class="{ \'invisible\': !pageLoaded}" class="avatar-type-toggle-scale pill-toggle" data-toggle="tooltip" title="{{ \'Label.SwitchAvatarType\' | translate }}"> <input type="radio" ng-model="avatarType" id="radio-R6" value="R6" ng-change="updateAvatarType()"/> <label for="radio-R6">R6</label> <input type="radio" ng-model="avatarType" id="radio-R15" value="R15" ng-change="updateAvatarType()"/> <label for="radio-R15">R15</label> </div> <div ng-if="pageLoaded" ng-hide="avatarDataModel.scaleEnabled" class="avatar-type-message-banner">{{ "Message.SelectEnableScaling" |\r\n        translate }}</div> </div> <div ng-if="!pageLoaded" loading-animated></div> <div ng-controller="avatarScaleController" class="section-sliders"> <div ng-class="{ \'invisible\': !$parent.pageLoaded }" class="scale-container" ng-repeat="scale in scales"> <div ng-if="!(avatarDataModel.isBodyTypeScaleOutOfTab && scale.type == \'BodyType\')"> <div class="text-label font-subheader-1">{{scale.label}}</div> <div class="scale-label font-body">{{ (scale.value / 100) | percentage:0 }}%</div> <input type="range" on-input-finished="updateScales()" class="pr{{ (scale.value-scale.min) / (scale.max-scale.min) | percentage:0 | round:4 }}" id="{{scale.label | lowercase}}-scale" ng-disabled="!avatarDataModel.scaleEnabled" step="{{scale.increment}}" min="{{scale.min}}" max="{{scale.max}}" ng-model="scale.value"/> </div> </div> </div> '
            },
            6870: function(e) {
                e.exports = ' <div ng-controller="recentItemsController" class="tab-pane" id="recent" ng-class="{\'active\':(selectedTab.name === \'Recent\')}"> <div avatar-items id="recent-items-container"></div> </div> <div ng-controller="avatarItemsController" class="tab-pane" id="clothing" ng-init="init()" ng-class="{\'active\':(selectedTab.tabType === \'Assets\' && selectedMenu.name !== \'BodyColors\' && selectedMenu.name !== \'Scale\')}"> <div> <button ng-if="selectedMenu.name === \'Emote\'" ng-type="button" class="equip-emotes-button btn-secondary-xs btn-float-right" ng-click="openEmotesModal()"> {{ "Heading.EquipEmotes" | translate }} </button> </div> <div avatar-items infinite-scroll="getNextPage()" infinite-scroll-distance="3" id="avatar-items-container"></div> <a class="text-link advanced-link" ng-click="openAdvancedAccessories()" ng-show="showAdvancedAccessoriesLink">{{ "Action.Advanced" | translate }}</a> <recommendations ng-if="recommendationsData.showRecommendations" recommendation-type="recommendationsData.recommendationType" recommendation-subtype="recommendationsData.recommendationSubtype" page-name="Avatar" show-see-all-button="true"></recommendations> </div> <div ng-controller="bodyColorsController" class="tab-pane" id="bodyColors" ng-class="{\'active\':(selectedTab.name === \'Body\' && selectedMenu.name === \'BodyColors\')}"> <div class="section-content"> <div class="bodycolors-list"> <div ng-repeat="bodyColor in colorsPalette" class="color-dot" ng-click="onColorDotClicked(bodyColor)" ng-class="{active: isColorSelected(bodyColor)}" ng-style="{\'background-color\': bodyColor.hexColor}"></div> </div> <a class="text-link advanced-link" ng-click="openAdvancedBodyColors()">{{ "Action.Advanced" | translate }}</a> </div> </div> <div ng-if="avatarDataModel.isAvatarScaleEmbeddedInTab" class="tab-pane scaling-tab" id="scale" ng-class="{\'active\':(selectedTab.name === \'Body\' && selectedMenu.name === \'Scale\')}"> <div class="section-content"> <div avatar-scaling></div> </div> </div> <div ng-controller="outfitsController" class="tab-pane" id="costumes" ng-class="{\'active\':(selectedTab.name === \'Outfits\') || (selectedTab.name === \'Costumes\')}"> <div> <button ng-if="selectedMenu.name !== \'PresetCostumes\'" ng-type="button" class="btn-secondary-xs btn-float-right" ng-click="createOutfitClicked()"> {{createNewOutfitLabel}} </button> </div> <div avatar-items infinite-scroll="getNextPage(selectedMenu.name)" infinite-scroll-distance="1"></div> </div> '
            },
            5738: function(e) {
                e.exports = ' <ul class="breadcrumb-container"> <li>{{selectedTab.label}}</li> <li ng-if="(selectedRow != null)"> <span class="icon-right-16x16"></span> </li> <li ng-if="(selectedRow != null)"> <a ng-click="onRowClick(selectedRow)">{{selectedRow.title}}</a> </li> <li ng-if="(selectedMenu != null)"> <span class="icon-right-16x16"></span> </li> <li ng-if="(selectedMenu != null)"> <span>{{selectedMenu.label}}</span> </li> </ul> <div class="col-md-12 alert alert-info avatar-editor-alert" ng-if="displayPresetCostumeDelayMessage"> <span> {{ "Message.PresetCostumesDelay" | translate }} </span> </div> <span ng-if="selectedMenu != null"> <a ng-if="selectedMenu.name == \'Shirts\'" class="btn-float-right btn-min-width btn-secondary-xs" ng-href="{{createUrl}}{{shirtId}}"> {{ "Action.Create" | translate }} </a> <a ng-if="selectedMenu.name == \'Pants\'" class="btn-float-right btn-min-width btn-secondary-xs" ng-href="{{createUrl}}{{pantsId}}"> {{ "Action.Create" | translate }} </a> <a ng-if="selectedMenu.name == \'T-Shirts\'" class="btn-float-right btn-min-width btn-secondary-xs" ng-href="{{createUrl}}{{tShirtId}}"> {{ "Action.Create" | translate }} </a> </span>'
            },
            2935: function(e) {
                e.exports = '<div class="item-card-container" ng-class="{\'is-selected\' : selectedAssetId === item.id}" ng-click="onEmotesCardClick(item.id)" data-item-id="{{item.id}}" data-item-name="{{item.name}}"> <div class="item-card-link"> <div class="item-card-thumb-container"> <thumbnail-2d class="item-card-thumb emotes-center-div" thumbnail-type="thumbnailTypes.assetThumbnail" thumbnail-target-id="item.id"/> </div> </div> <div class="item-card-caption"> <div class="item-card-name-link"> <div title="{{item.name}}" class="text-overflow item-card-name">{{item.name}}</div> </div> </div> </div>'
            },
            7278: function(e) {
                e.exports = '<span class="spinner spinner-default"></span> '
            },
            792: function(e) {
                "use strict";
                e.exports = Roblox
            },
            5734: function(e) {
                "use strict";
                e.exports = angular
            },
            3609: function(e) {
                "use strict";
                e.exports = jQuery
            }
        },
        s = {};

    function g(e) {
        if (s[e]) return s[e].exports;
        var t = s[e] = {
            exports: {}
        };
        return a[e](t, t.exports, g), t.exports
    }
    g.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return g.d(t, {
                a: t
            }), t
        }, g.d = function(e, t) {
            for (var a in t) g.o(t, a) && !g.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
        }, g.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, g.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            var s, n, i, o, e = g(5734),
                t = g.n(e),
                a = g(726),
                r = g(3609),
                l = g.n(r);

            function c() {
                s = l()("#header"), n = 10, i = l()("#wrap"), l()(window).scroll(d), d()
            }

            function d() {
                if (void 0 === o) {
                    var e = l()(".right-wrapper-placeholder");
                    if (!(0 < e.length)) return;
                    o = e
                }
                var t = o[0].getBoundingClientRect().top,
                    a = o.is(":visible"),
                    e = s.height();
                a && t - e - n < 0 ? i.addClass("pinned") : i.removeClass("pinned")
            }
            l()(function() {
                c()
            });
            var e = {
                    init: c
                },
                u = g(9681);
            (0, a.importFilesUnderPath)(g(8572)), (0, a.importFilesUnderPath)(g(9237)), (0, a.importFilesUnderPath)(g(6213)), (0, a.importFilesUnderPath)(g(3249)), (0, a.importFilesUnderPath)(g(7570));
            var r = g(4751),
                m = (0, a.templateCacheGenerator)(t(), "avatarAppTemplates", r);
            t().element(function() {
                t().bootstrap("#avatar-container", [u.Z.name, m.name])
            }), window.avatar = u.Z, window.Roblox.avatar = e
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/8a5b05f4399783b54ced-avatar.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Avatar");