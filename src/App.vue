<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
/*每个页面公共css */
.df {
  display: flex;
}

.df-ac {
  display: flex;
  align-items: center;
}

.df-as {
  display: flex;
  align-items: flex-start;
}

.df-jb-ac {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// 单行文本溢出 ...显示
.dot-spill {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
