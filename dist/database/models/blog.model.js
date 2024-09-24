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
exports.Blog = void 0;
const typeorm_1 = require("typeorm");
const user_model_1 = require("./user.model");
let Blog = class Blog {
};
exports.Blog = Blog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Blog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], Blog.prototype, "Title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], Blog.prototype, "BlogId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], Blog.prototype, "Tags", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false, default: true }),
    __metadata("design:type", Boolean)
], Blog.prototype, "Published", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer", nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Blog.prototype, "Likes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256, nullable: false }),
    __metadata("design:type", String)
], Blog.prototype, "CommentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer", nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Blog.prototype, "Save", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Blog.prototype, "CreatedAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Blog.prototype, "UpdatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Blog.prototype, "DeletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_model_1.User),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_model_1.User)
], Blog.prototype, "user", void 0);
exports.Blog = Blog = __decorate([
    (0, typeorm_1.Entity)()
], Blog);
//# sourceMappingURL=blog.model.js.map