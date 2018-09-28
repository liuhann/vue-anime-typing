export default {
  fadeIn: {
    animateFrom: {
      opacity: 0
    },
    animateTo: {
      opacity: 1
    }
  },
  bounceDown: {
    animateFrom: {
      opacity: 0,
      translateY: -20
    },
    animateTo: {
      opacity: 1,
      translateY: 0
    }
  },
  bounceUp: {
    animateFrom: {
      opacity: 0,
      translateY: 20
    },
    animateTo: {
      opacity: 1,
      translateY: 0
    }
  },
  slideInLeft: {
    animateFrom: {
      opacity: 0,
      translateX: 30
    },
    animateTo: {
      opacity: 1,
      translateX: 0
    }
  },
  zoomIn: {
    animateFrom: {
      opacity: 0,
      scale: '2'
    },
    animateTo: {
      opacity: 1,
      scale: '1'
    }
  },
  rotateRightIn: {
    animateFrom: {
      rotate: '45deg',
      translateX: 20,
      translateY: -20,
      opacity: 0
    },
    animateTo: {
      rotate: '0',
      translateX: 0,
      translateY: 0,
      opacity: 1
    }
  },
  rollTopIn: {
    animateFrom: {
      rotateX: '60deg',
      translateY: -10,
      opacity: 0
    },
    animateTo: {
      rotateX: '0',
      translateY: 0,
      opacity: 1
    }
  },
  rollRightIn: {
    animateFrom: {
      rotateY: '60deg',
      translateX: 30,
      opacity: 0
    },
    animateTo: {
      rotateY: '0',
      translateX: 0,
      opacity: 1
    }
  }
}
