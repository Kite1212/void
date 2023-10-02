! function() {
    "use strict";
    var i = {
            n: function(e) {
                var a = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return i.d(a, {
                    a: a
                }), a
            },
            d: function(e, a) {
                for (var n in a) i.o(a, n) && !i.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: a[n]
                })
            },
            o: function(e, a) {
                return Object.prototype.hasOwnProperty.call(e, a)
            }
        },
        e = Roblox,
        t = [{
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
        }],
        a = {
            hat: "Hat",
            hairAccessory: "HairAccessory",
            faceAccessory: "FaceAccessory",
            neckAccessory: "NeckAccessory",
            shoulderAccessory: "ShoulderAccessory",
            frontAccessory: "FrontAccessory",
            backAccessory: "BackAccessory",
            waistAccessory: "WaistAccessory",
            climbAnimation: "ClimbAnimation",
            fallAnimation: "FallAnimation",
            jumpAnimation: "JumpAnimation",
            runAnimation: "RunAnimation",
            swimAnimation: "SwimAnimation",
            walkAnimation: "WalkAnimation",
            emoteAnimation: "EmoteAnimation",
            hairAccessoryName: "Hair Accessory",
            faceAccessoryName: "Face Accessory",
            neckAccessoryName: "Neck Accessory",
            shoulderAccessoryName: "Shoulder Accessory",
            frontAccessoryName: "Front Accessory",
            backAccessoryName: "Back Accessory",
            waistAccessoryName: "Waist Accessory",
            climbAnimationName: "Climb Animation",
            fallAnimationName: "Fall Animation",
            jumpAnimationName: "Jump Animation",
            runAnimationName: "Run Animation",
            swimAnimationName: "Swim Animation",
            walkAnimationName: "Walk Animation",
            emoteAnimationName: "Emote Animation"
        },
        A = {
            64: "Tops",
            65: "Tops",
            66: "Bottoms",
            69: "Bottoms",
            72: "Bottoms",
            67: "Outerwear",
            68: "Outerwear"
        },
        y = {
            Tops: 1,
            Bottoms: 1,
            Outerwear: 1
        },
        n = {
            70: 3,
            71: 3,
            66: 4,
            69: 5,
            72: 6,
            64: 7,
            65: 8,
            68: 9,
            67: 10,
            41: 11
        },
        s = {
            41: 1
        };

    function u(e) {
        switch (e) {
            case a.hat:
            case a.hairAccessory:
            case a.faceAccessory:
            case a.neckAccessory:
            case a.shoulderAccessory:
            case a.frontAccessory:
            case a.backAccessory:
            case a.waistAccessory:
            case a.hairAccessoryName:
            case a.faceAccessoryName:
            case a.neckAccessoryName:
            case a.shoulderAccessoryName:
            case a.frontAccessoryName:
            case a.backAccessoryName:
            case a.waistAccessoryName:
                return !0;
            default:
                return !1
        }
    }

    function d(a) {
        var n;
        return t.forEach(function(e) {
            e.id === a && (n = e)
        }), n
    }

    function m(e) {
        return n[e]
    }
    i.n(e)().AvatarAccoutrementService = {
        addAssetToAvatar: function(t, e) {
            var s = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                m = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
                c = [],
                o = {},
                r = u(t.assetType.name);

            function a(e) {
                var a, n = e.assetType,
                    i = !r && u(n.name) ? 10 : function(e) {
                        if (e in A) {
                            var a = A[e];
                            return y[a]
                        }
                        return (e = d(e)) ? e.maxNumber : 1
                    }(n.id),
                    n = (a = e.assetType, !r && u(a.name) ? "Accessory" : a.id in A ? A[a.id] : a.id);
                o[n] = void 0 === o[n] ? 0 : o[n], m || o[n] < i ? (i = (a = e).assetType, s && a !== t && (i.id in A ? t.assetType.id in A && A[i.id] === A[t.assetType.id] : !(t.assetType.id in A || i.id !== t.assetType.id)) ? console.debug("Removed asset ".concat(e.name, " because it is being cleared by the new outfit")) : (o[n] += 1, c.push(e))) : console.debug("Removed asset ".concat(e.name, " because it exceeded wearing limits"))
            }
            return a(t), e.forEach(function(e) {
                a(e)
            }), c
        },
        removeAssetFromAvatar: function(a, e) {
            var n = [];
            return e.forEach(function(e) {
                e.id !== a.id && n.push(e)
            }), n
        },
        getAssetTypeById: d,
        getAssetTypeByName: function(a) {
            var n;
            return t.forEach(function(e) {
                e.name === a && (n = e)
            }), n
        },
        getAssetTypeByType: function(a) {
            var n;
            return t.forEach(function(e) {
                e.name === a && (n = e)
            }), n
        },
        getAssetTypeNameById: function(e) {
            return (e = d(e)) && e.name ? e.name : null
        },
        getLayeredClothingAssetOrder: m,
        getAdvancedAccessoryLimit: function(e) {
            return s[e]
        },
        isAccessoryType: u,
        isAnimation: function(e) {
            switch (e) {
                case a.climbAnimation:
                case a.fallAnimation:
                case a.jumpAnimation:
                case a.runAnimation:
                case a.swimAnimation:
                case a.walkAnimation:
                case a.emoteAnimation:
                case a.climbAnimationName:
                case a.fallAnimationName:
                case a.jumpAnimationName:
                case a.runAnimationName:
                case a.swimAnimationName:
                case a.walkAnimationName:
                case a.emoteAnimationName:
                    return !0;
                default:
                    return !1
            }
        },
        isEmote: function(e) {
            switch (e) {
                case a.emoteAnimation:
                case a.emoteAnimationName:
                    return !0;
                default:
                    return !1
            }
        },
        isLayeredClothing: function(e) {
            return void 0 !== m(e)
        }
    }
}();
//# sourceMappingURL=https://js.rbxcdn.com/6bc23efbe7a5072f1bae-avatarAccoutrementRules.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("AvatarAccoutrementRules");