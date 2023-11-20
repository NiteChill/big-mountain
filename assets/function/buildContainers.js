function buildContainers(res) {
  data.push(res);
  data[0].map((el) => createContainers(el));
}
