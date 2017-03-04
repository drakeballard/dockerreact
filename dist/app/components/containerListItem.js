"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classNames = require("classnames");
var ContainerListItem = (function (_super) {
    __extends(ContainerListItem, _super);
    function ContainerListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContainerListItem.prototype.isRunning = function () {
        return this.props.state === 'running';
    };
    ContainerListItem.prototype.render = function () {
        var panelClass = this.isRunning() ? 'success' : 'default';
        var classes = classNames('panel', "panel-" + panelClass);
        var buttonText = this.isRunning() ? 'Stop' : 'Start';
        return (React.createElement("div", { classNames: "col-sm-3" },
            React.createElement("div", { classNames: classes },
                React.createElement("div", { classNames: "panel-heading" }, this.props.name),
                React.createElement("div", { classNames: "panel-body" },
                    "Status: ",
                    this.props.status,
                    React.createElement("br", null),
                    "Image: ",
                    this.props.image),
                React.createElement("div", { classNames: "panel-footer" },
                    React.createElement("button", { classNames: "btn btn-default" }, buttonText)))));
    };
    return ContainerListItem;
}(React.Component));
exports.ContainerListItem = ContainerListItem;
//# sourceMappingURL=containerListItem.js.map