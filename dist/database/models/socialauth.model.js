"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialAuth = exports.ProviderEnum = void 0;
const typeorm_1 = require("typeorm");
var ProviderEnum;
(function (ProviderEnum) {
    ProviderEnum["GITHUB"] = "github";
    ProviderEnum["GOOGLE"] = "google";
})(ProviderEnum || (exports.ProviderEnum = ProviderEnum = {}));
let SocialAuth = class SocialAuth {
};
exports.SocialAuth = SocialAuth;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], SocialAuth.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], SocialAuth.prototype, "UserId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ProviderEnum,
        nullable: false,
    }),
    __metadata("design:type", String)
], SocialAuth.prototype, "Provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], SocialAuth.prototype, "ProviderUserId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], SocialAuth.prototype, "AccessToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], SocialAuth.prototype, "RefreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp" }),
    __metadata("design:type", Date)
], SocialAuth.prototype, "ExpiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp" }),
    __metadata("design:type", Date)
], SocialAuth.prototype, "ConnectedAt", void 0);
exports.SocialAuth = SocialAuth = __decorate([
    (0, typeorm_1.Entity)()
], SocialAuth);
//# sourceMappingURL=socialauth.model.js.map