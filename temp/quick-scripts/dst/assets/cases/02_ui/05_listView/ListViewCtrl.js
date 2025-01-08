
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cases/02_ui/05_listView/ListViewCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6458+hf5VAnIXocmvhggqC', 'ListViewCtrl');
// cases/02_ui/05_listView/ListViewCtrl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    itemTemplate: {
      // item template to instantiate other items
      "default": null,
      type: cc.Node
    },
    scrollView: {
      "default": null,
      type: cc.ScrollView
    },
    spawnCount: 0,
    // how many items we actually spawn
    totalCount: 0,
    // how many items we need for the whole list
    spacing: 0,
    // space between each item
    bufferZone: 0,
    // when item is away from bufferZone, we relocate it
    lblScrollEvent: cc.Label,
    btnAddItem: cc.Button,
    btnRemoveItem: cc.Button,
    btnJumpToPosition: cc.Button,
    lblJumpPosition: cc.Label,
    lblTotalItems: cc.Label
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.content = this.scrollView.content;
    this.items = []; // array to store spawned items

    this.initialize();
    this.updateTimer = 0;
    this.updateInterval = 0.2;
    this.lastContentPosY = 0; // use this variable to detect if we are scrolling up or down
  },
  initialize: function initialize() {
    this.content.height = this.totalCount * (this.itemTemplate.height + this.spacing) + this.spacing; // get total content height

    for (var i = 0; i < this.spawnCount; ++i) {
      // spawn items, we only need to do this once
      var item = cc.instantiate(this.itemTemplate);
      this.content.addChild(item);
      item.setPosition(0, -item.height * (0.5 + i) - this.spacing * (i + 1));
      item.getComponent('Item').initItem(i, i);
      this.items.push(item);
    }
  },
  getPositionInView: function getPositionInView(item) {
    // get item position in scrollview's node space
    var worldPos = item.parent.convertToWorldSpaceAR(item.position);
    var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
    return viewPos;
  },
  update: function update(dt) {
    this.updateTimer += dt;
    if (this.updateTimer < this.updateInterval) return; // we don't need to do the math every frame

    this.updateTimer = 0;
    var items = this.items;
    var buffer = this.bufferZone;
    var isDown = this.scrollView.content.y < this.lastContentPosY; // scrolling direction

    var offset = (this.itemTemplate.height + this.spacing) * items.length;

    for (var i = 0; i < items.length; ++i) {
      var viewPos = this.getPositionInView(items[i]);

      if (isDown) {
        // if away from buffer zone and not reaching top of content
        if (viewPos.y < -buffer && items[i].y + offset < 0) {
          items[i].y = items[i].y + offset;
          var item = items[i].getComponent('Item');
          var itemId = item.itemID - items.length; // update item id

          item.updateItem(itemId);
        }
      } else {
        // if away from buffer zone and not reaching bottom of content
        if (viewPos.y > buffer && items[i].y - offset > -this.content.height) {
          items[i].y = items[i].y - offset;

          var _item = items[i].getComponent('Item');

          var _itemId = _item.itemID + items.length;

          _item.updateItem(_itemId);
        }
      }
    } // update lastContentPosY


    this.lastContentPosY = this.scrollView.content.y;
    this.lblTotalItems.textKey = "Total Items: " + this.totalCount;
  },
  scrollEvent: function scrollEvent(sender, event) {
    switch (event) {
      case 0:
        this.lblScrollEvent.string = "Scroll to Top";
        break;

      case 1:
        this.lblScrollEvent.string = "Scroll to Bottom";
        break;

      case 2:
        this.lblScrollEvent.string = "Scroll to Left";
        break;

      case 3:
        this.lblScrollEvent.string = "Scroll to Right";
        break;

      case 4:
        this.lblScrollEvent.string = "Scrolling";
        break;

      case 5:
        this.lblScrollEvent.string = "Bounce Top";
        break;

      case 6:
        this.lblScrollEvent.string = "Bounce bottom";
        break;

      case 7:
        this.lblScrollEvent.string = "Bounce left";
        break;

      case 8:
        this.lblScrollEvent.string = "Bounce right";
        break;

      case 9:
        this.lblScrollEvent.string = "Auto scroll ended";
        break;
    }
  },
  addItem: function addItem() {
    this.content.height = (this.totalCount + 1) * (this.itemTemplate.height + this.spacing) + this.spacing; // get total content height

    this.totalCount = this.totalCount + 1;
  },
  removeItem: function removeItem() {
    if (this.totalCount - 1 < 30) {
      cc.error("can't remove item less than 30!");
      return;
    }

    this.content.height = (this.totalCount - 1) * (this.itemTemplate.height + this.spacing) + this.spacing; // get total content height

    this.totalCount = this.totalCount - 1;
    this.moveBottomItemToTop();
  },
  moveBottomItemToTop: function moveBottomItemToTop() {
    var offset = (this.itemTemplate.height + this.spacing) * this.items.length;
    var length = this.items.length;
    var item = this.getItemAtBottom(); // whether need to move to top

    if (item.y + offset < 0) {
      item.y = item.y + offset;
      var itemComp = item.getComponent('Item');
      var itemId = itemComp.itemID - length;
      itemComp.updateItem(itemId);
    }
  },
  getItemAtBottom: function getItemAtBottom() {
    var item = this.items[0];

    for (var i = 1; i < this.items.length; ++i) {
      if (item.y > this.items[i].y) {
        item = this.items[i];
      }
    }

    return item;
  },
  scrollToFixedPosition: function scrollToFixedPosition() {
    this.scrollView.scrollToOffset(cc.v2(0, 500), 2);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jYXNlcy8wMl91aS8wNV9saXN0Vmlldy9MaXN0Vmlld0N0cmwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtVGVtcGxhdGUiLCJ0eXBlIiwiTm9kZSIsInNjcm9sbFZpZXciLCJTY3JvbGxWaWV3Iiwic3Bhd25Db3VudCIsInRvdGFsQ291bnQiLCJzcGFjaW5nIiwiYnVmZmVyWm9uZSIsImxibFNjcm9sbEV2ZW50IiwiTGFiZWwiLCJidG5BZGRJdGVtIiwiQnV0dG9uIiwiYnRuUmVtb3ZlSXRlbSIsImJ0bkp1bXBUb1Bvc2l0aW9uIiwibGJsSnVtcFBvc2l0aW9uIiwibGJsVG90YWxJdGVtcyIsIm9uTG9hZCIsImNvbnRlbnQiLCJpdGVtcyIsImluaXRpYWxpemUiLCJ1cGRhdGVUaW1lciIsInVwZGF0ZUludGVydmFsIiwibGFzdENvbnRlbnRQb3NZIiwiaGVpZ2h0IiwiaSIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJpbml0SXRlbSIsInB1c2giLCJnZXRQb3NpdGlvbkluVmlldyIsIndvcmxkUG9zIiwicGFyZW50IiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwicG9zaXRpb24iLCJ2aWV3UG9zIiwibm9kZSIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwidXBkYXRlIiwiZHQiLCJidWZmZXIiLCJpc0Rvd24iLCJ5Iiwib2Zmc2V0IiwibGVuZ3RoIiwiaXRlbUlkIiwiaXRlbUlEIiwidXBkYXRlSXRlbSIsInRleHRLZXkiLCJzY3JvbGxFdmVudCIsInNlbmRlciIsImV2ZW50Iiwic3RyaW5nIiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJlcnJvciIsIm1vdmVCb3R0b21JdGVtVG9Ub3AiLCJnZXRJdGVtQXRCb3R0b20iLCJpdGVtQ29tcCIsInNjcm9sbFRvRml4ZWRQb3NpdGlvbiIsInNjcm9sbFRvT2Zmc2V0IiwidjIi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Qm5FLEVBQUUsQ0FBQ29FLEVBQUgsQ0FBTSxDQUFOLEVBQVMsR0FBVCxDQUEvQixFQUE4QyxDQUE5QztFQUNIO0FBbEtJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGl0ZW1UZW1wbGF0ZTogeyAvLyBpdGVtIHRlbXBsYXRlIHRvIGluc3RhbnRpYXRlIG90aGVyIGl0ZW1zXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxWaWV3OiB7XG4gICAgICAgIFx0ZGVmYXVsdDogbnVsbCxcbiAgICAgICAgXHR0eXBlOiBjYy5TY3JvbGxWaWV3XG4gICAgICAgIH0sXG4gICAgICAgIHNwYXduQ291bnQ6IDAsIC8vIGhvdyBtYW55IGl0ZW1zIHdlIGFjdHVhbGx5IHNwYXduXG4gICAgICAgIHRvdGFsQ291bnQ6IDAsIC8vIGhvdyBtYW55IGl0ZW1zIHdlIG5lZWQgZm9yIHRoZSB3aG9sZSBsaXN0XG4gICAgICAgIHNwYWNpbmc6IDAsIC8vIHNwYWNlIGJldHdlZW4gZWFjaCBpdGVtXG4gICAgICAgIGJ1ZmZlclpvbmU6IDAsIC8vIHdoZW4gaXRlbSBpcyBhd2F5IGZyb20gYnVmZmVyWm9uZSwgd2UgcmVsb2NhdGUgaXRcbiAgICAgICAgbGJsU2Nyb2xsRXZlbnQ6IGNjLkxhYmVsLFxuICAgICAgICBidG5BZGRJdGVtOiBjYy5CdXR0b24sXG4gICAgICAgIGJ0blJlbW92ZUl0ZW06IGNjLkJ1dHRvbixcbiAgICAgICAgYnRuSnVtcFRvUG9zaXRpb246IGNjLkJ1dHRvbixcbiAgICAgICAgbGJsSnVtcFBvc2l0aW9uOiBjYy5MYWJlbCxcbiAgICAgICAgbGJsVG90YWxJdGVtczogY2MuTGFiZWwsXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIFx0dGhpcy5jb250ZW50ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQ7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTsgLy8gYXJyYXkgdG8gc3RvcmUgc3Bhd25lZCBpdGVtc1xuICAgIFx0dGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMudXBkYXRlVGltZXIgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gMC4yO1xuICAgICAgICB0aGlzLmxhc3RDb250ZW50UG9zWSA9IDA7IC8vIHVzZSB0aGlzIHZhcmlhYmxlIHRvIGRldGVjdCBpZiB3ZSBhcmUgc2Nyb2xsaW5nIHVwIG9yIGRvd25cbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQuaGVpZ2h0ID0gdGhpcy50b3RhbENvdW50ICogKHRoaXMuaXRlbVRlbXBsYXRlLmhlaWdodCArIHRoaXMuc3BhY2luZykgKyB0aGlzLnNwYWNpbmc7IC8vIGdldCB0b3RhbCBjb250ZW50IGhlaWdodFxuICAgIFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwYXduQ291bnQ7ICsraSkgeyAvLyBzcGF3biBpdGVtcywgd2Ugb25seSBuZWVkIHRvIGRvIHRoaXMgb25jZVxuICAgIFx0XHRsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVRlbXBsYXRlKTtcbiAgICBcdFx0dGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgIFx0XHRpdGVtLnNldFBvc2l0aW9uKDAsIC1pdGVtLmhlaWdodCAqICgwLjUgKyBpKSAtIHRoaXMuc3BhY2luZyAqIChpICsgMSkpO1xuICAgIFx0XHRpdGVtLmdldENvbXBvbmVudCgnSXRlbScpLmluaXRJdGVtKGksIGkpO1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIFx0fVxuICAgIH0sXG5cbiAgICBnZXRQb3NpdGlvbkluVmlldzogZnVuY3Rpb24gKGl0ZW0pIHsgLy8gZ2V0IGl0ZW0gcG9zaXRpb24gaW4gc2Nyb2xsdmlldydzIG5vZGUgc3BhY2VcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gaXRlbS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGl0ZW0ucG9zaXRpb24pO1xuICAgICAgICBsZXQgdmlld1BvcyA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcbiAgICAgICAgcmV0dXJuIHZpZXdQb3M7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24oZHQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlVGltZXIgPCB0aGlzLnVwZGF0ZUludGVydmFsKSByZXR1cm47IC8vIHdlIGRvbid0IG5lZWQgdG8gZG8gdGhlIG1hdGggZXZlcnkgZnJhbWVcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lciA9IDA7XG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIGxldCBidWZmZXIgPSB0aGlzLmJ1ZmZlclpvbmU7XG4gICAgICAgIGxldCBpc0Rvd24gPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC55IDwgdGhpcy5sYXN0Q29udGVudFBvc1k7IC8vIHNjcm9sbGluZyBkaXJlY3Rpb25cbiAgICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLml0ZW1UZW1wbGF0ZS5oZWlnaHQgKyB0aGlzLnNwYWNpbmcpICogaXRlbXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgdmlld1BvcyA9IHRoaXMuZ2V0UG9zaXRpb25JblZpZXcoaXRlbXNbaV0pO1xuICAgICAgICAgICAgaWYgKGlzRG93bikge1xuICAgICAgICAgICAgICAgIC8vIGlmIGF3YXkgZnJvbSBidWZmZXIgem9uZSBhbmQgbm90IHJlYWNoaW5nIHRvcCBvZiBjb250ZW50XG4gICAgICAgICAgICAgICAgaWYgKHZpZXdQb3MueSA8IC1idWZmZXIgJiYgaXRlbXNbaV0ueSArIG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaV0ueSA9IGl0ZW1zW2ldLnkgKyBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbXNbaV0uZ2V0Q29tcG9uZW50KCdJdGVtJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtSWQgPSBpdGVtLml0ZW1JRCAtIGl0ZW1zLmxlbmd0aDsgLy8gdXBkYXRlIGl0ZW0gaWRcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51cGRhdGVJdGVtKGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBhd2F5IGZyb20gYnVmZmVyIHpvbmUgYW5kIG5vdCByZWFjaGluZyBib3R0b20gb2YgY29udGVudFxuICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnkgPiBidWZmZXIgJiYgaXRlbXNbaV0ueSAtIG9mZnNldCA+IC10aGlzLmNvbnRlbnQuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLnkgPSBpdGVtc1tpXS55IC0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGl0ZW1zW2ldLmdldENvbXBvbmVudCgnSXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUlkID0gaXRlbS5pdGVtSUQgKyBpdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udXBkYXRlSXRlbShpdGVtSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgbGFzdENvbnRlbnRQb3NZXG4gICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NZID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueTtcbiAgICAgICAgdGhpcy5sYmxUb3RhbEl0ZW1zLnRleHRLZXkgPSBcIlRvdGFsIEl0ZW1zOiBcIiArIHRoaXMudG90YWxDb3VudDtcbiAgICB9LFxuXG4gICAgc2Nyb2xsRXZlbnQ6IGZ1bmN0aW9uKHNlbmRlciwgZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKGV2ZW50KSB7XG4gICAgICAgICAgICBjYXNlIDA6IFxuICAgICAgICAgICAgICAgdGhpcy5sYmxTY3JvbGxFdmVudC5zdHJpbmcgPSBcIlNjcm9sbCB0byBUb3BcIjsgXG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgICAgICB0aGlzLmxibFNjcm9sbEV2ZW50LnN0cmluZyA9IFwiU2Nyb2xsIHRvIEJvdHRvbVwiOyBcbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOiBcbiAgICAgICAgICAgICAgIHRoaXMubGJsU2Nyb2xsRXZlbnQuc3RyaW5nID0gXCJTY3JvbGwgdG8gTGVmdFwiOyBcbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOiBcbiAgICAgICAgICAgICAgIHRoaXMubGJsU2Nyb2xsRXZlbnQuc3RyaW5nID0gXCJTY3JvbGwgdG8gUmlnaHRcIjsgXG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDogXG4gICAgICAgICAgICAgICB0aGlzLmxibFNjcm9sbEV2ZW50LnN0cmluZyA9IFwiU2Nyb2xsaW5nXCI7IFxuICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6IFxuICAgICAgICAgICAgICAgdGhpcy5sYmxTY3JvbGxFdmVudC5zdHJpbmcgPSBcIkJvdW5jZSBUb3BcIjsgXG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjogXG4gICAgICAgICAgICAgICB0aGlzLmxibFNjcm9sbEV2ZW50LnN0cmluZyA9IFwiQm91bmNlIGJvdHRvbVwiOyBcbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OiBcbiAgICAgICAgICAgICAgIHRoaXMubGJsU2Nyb2xsRXZlbnQuc3RyaW5nID0gXCJCb3VuY2UgbGVmdFwiOyBcbiAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4OiBcbiAgICAgICAgICAgICAgIHRoaXMubGJsU2Nyb2xsRXZlbnQuc3RyaW5nID0gXCJCb3VuY2UgcmlnaHRcIjsgXG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTogXG4gICAgICAgICAgICAgICB0aGlzLmxibFNjcm9sbEV2ZW50LnN0cmluZyA9IFwiQXV0byBzY3JvbGwgZW5kZWRcIjsgXG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRJdGVtOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb250ZW50LmhlaWdodCA9ICh0aGlzLnRvdGFsQ291bnQgKyAxKSAqICh0aGlzLml0ZW1UZW1wbGF0ZS5oZWlnaHQgKyB0aGlzLnNwYWNpbmcpICsgdGhpcy5zcGFjaW5nOyAvLyBnZXQgdG90YWwgY29udGVudCBoZWlnaHRcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdGhpcy50b3RhbENvdW50ICsgMTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnRvdGFsQ291bnQgLSAxIDwgMzApIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiY2FuJ3QgcmVtb3ZlIGl0ZW0gbGVzcyB0aGFuIDMwIVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGVudC5oZWlnaHQgPSAodGhpcy50b3RhbENvdW50IC0gMSkgKiAodGhpcy5pdGVtVGVtcGxhdGUuaGVpZ2h0ICsgdGhpcy5zcGFjaW5nKSArIHRoaXMuc3BhY2luZzsgLy8gZ2V0IHRvdGFsIGNvbnRlbnQgaGVpZ2h0XG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRoaXMudG90YWxDb3VudCAtIDE7XG5cbiAgICAgICAgdGhpcy5tb3ZlQm90dG9tSXRlbVRvVG9wKCk7XG4gICAgfSxcblxuICAgIG1vdmVCb3R0b21JdGVtVG9Ub3AgKCkge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMuaXRlbVRlbXBsYXRlLmhlaWdodCArIHRoaXMuc3BhY2luZykgKiB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZ2V0SXRlbUF0Qm90dG9tKCk7XG5cbiAgICAgICAgLy8gd2hldGhlciBuZWVkIHRvIG1vdmUgdG8gdG9wXG4gICAgICAgIGlmIChpdGVtLnkgKyBvZmZzZXQgPCAwKSB7XG4gICAgICAgICAgICBpdGVtLnkgPSBpdGVtLnkgKyBvZmZzZXQ7XG4gICAgICAgICAgICBsZXQgaXRlbUNvbXAgPSBpdGVtLmdldENvbXBvbmVudCgnSXRlbScpO1xuICAgICAgICAgICAgbGV0IGl0ZW1JZCA9IGl0ZW1Db21wLml0ZW1JRCAtIGxlbmd0aDtcbiAgICAgICAgICAgIGl0ZW1Db21wLnVwZGF0ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRJdGVtQXRCb3R0b20gKCkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0ueSA+IHRoaXMuaXRlbXNbaV0ueSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH0sXG5cbiAgICBzY3JvbGxUb0ZpeGVkUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KGNjLnYyKDAsIDUwMCksIDIpO1xuICAgIH1cbn0pO1xuIl19