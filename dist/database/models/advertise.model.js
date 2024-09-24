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
exports.Advertise = void 0;
const typeorm_1 = require("typeorm");
const advertiserdashboard_model_1 = require("./advertiserdashboard.model");
let Advertise = class Advertise {
};
exports.Advertise = Advertise;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Advertise.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], Advertise.prototype, "Title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], Advertise.prototype, "Description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], Advertise.prototype, "ImageSrc", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Advertise.prototype, "CreatedAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Advertise.prototype, "UpdatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Advertise.prototype, "DeletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => advertiserdashboard_model_1.AdvertiserDashboard),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", advertiserdashboard_model_1.AdvertiserDashboard)
], Advertise.prototype, "advertiserDashboard", void 0);
exports.Advertise = Advertise = __decorate([
    (0, typeorm_1.Entity)()
], Advertise);
//# sourceMappingURL=advertise.model.js.map