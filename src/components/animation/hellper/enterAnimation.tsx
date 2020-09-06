const enterListAnimation = (
  startNode: number,
  endNode: number,
  animatedList,
  animation: string,
  timeout
) => {
  const nodes = animatedList.current?.childNodes;
  if (nodes[startNode] !== undefined) {
    nodes[startNode].className = animation;
  }

  if (startNode < endNode) {
    nodes[startNode].onanimationend = () => {
      startNode++;
      enterListAnimation(startNode, endNode, animatedList, animation, timeout);
    };
    // setTimeout(() => {
    //   enterListAnimation(startNode, endNode, animatedList, animation, timeout);
    // }, timeout);
  }
};

export default enterListAnimation;
