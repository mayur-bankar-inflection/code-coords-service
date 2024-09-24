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
exports.SignUp = void 0;
const typeorm_1 = require("typeorm");
let SignUp = class SignUp {
};
exports.SignUp = SignUp;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], SignUp.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], SignUp.prototype, "SignUpId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], SignUp.prototype, "UserId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], SignUp.prototype, "UserName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], SignUp.prototype, "Password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], SignUp.prototype, "Email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], SignUp.prototype, "UserRole", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SignUp.prototype, "CreatedAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SignUp.prototype, "UpdatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], SignUp.prototype, "DeletedAt", void 0);
exports.SignUp = SignUp = __decorate([
    (0, typeorm_1.Entity)()
], SignUp);
//# sourceMappingURL=signup.model.js.map