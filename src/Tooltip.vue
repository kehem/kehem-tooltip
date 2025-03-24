<template>
    <div
      class="tooltip-wrapper"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
    >
      <slot></slot>
      <transition name="fade">
        <div
          v-if="isVisible"
          :class="['tooltip', positionClass]"
          :style="tooltipStyles"
        >
          {{ content }}
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const props = defineProps({
    content: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: "top",
      validator: (value) => ["top", "bottom", "left", "right"].includes(value),
    },
    backgroundColor: { type: String, default: "#333" },
    textColor: { type: String, default: "#fff" },
  });
  
  const isVisible = ref(false);
  
  const positionClass = computed(() => `tooltip-${props.position}`);
  
  const tooltipStyles = computed(() => {
    let positionStyles = {};
    switch (props.position) {
      case "top":
        positionStyles = { bottom: "100%", marginBottom: "8px" };
        break;
      case "bottom":
        positionStyles = { top: "100%", marginTop: "8px" };
        break;
      case "left":
        positionStyles = { right: "100%", marginRight: "8px" };
        break;
      case "right":
        positionStyles = { left: "100%", marginLeft: "8px" };
        break;
      default:
        positionStyles = {};
    }
    return {
      ...positionStyles,
      backgroundColor: props.backgroundColor,
      color: props.textColor,
    };
  });
  
  const showTooltip = () => (isVisible.value = true);
  const hideTooltip = () => (isVisible.value = false);
  </script>
  
  <style scoped>
  .tooltip-wrapper {
    position: relative;
    display: inline-block;
  }
  
  .tooltip {
    position: absolute;
    background: #333;
    color: #fff;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 14px;
    white-space: nowrap;
    z-index: 10;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }
  
  .tooltip-top {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .tooltip-bottom {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .tooltip-left {
    top: 50%;
    transform: translateY(-50%);
  }
  
  .tooltip-right {
    top: 50%;
    transform: translateY(-50%);
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .tooltip-top::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #333;
  }
  
  .tooltip-bottom::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-bottom-color: #333;
  }
  
  .tooltip-left::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-left-color: #333;
  }
  
  .tooltip-right::after {
    content: "";
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: #333;
  }
  </style>
  