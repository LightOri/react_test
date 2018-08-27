export function GetPictures(tumbler) {
  // https://pixabay.com/api/docs/
  fetch(`https://pixabay.com/api/?key=9884884-d497d9cab92ccd36dc4962c2b&q=yellow+flowers&image_type=photo&per_page=${this.state.count}`)
    .then((response) => response.json())
    .then((data) => this.setState({ fetchedData: data, isLoading: false, toggleSwitch: tumbler }))
    .catch(error => this.setState({ error, isLoading: false }));
}