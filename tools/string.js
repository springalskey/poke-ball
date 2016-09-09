String.prototype.firstUppserCase = function () {
  console.log(this);
  return this.toString()[0].toUpperCase()+ this.toString().slice(1);
}
