export const get = async (req, res) => {
  const descriptions = [
    '경험이 풍부한 젊은 개발자',
    '리더쉽을 겸비한 개발자',
    '배움을 멈추지 않는 개발자',
  ];
  res.end(JSON.stringify(descriptions));
}