import axios from "axios";

export const getPictures = async (org) => {
  const response = await axios.get(
    `http://www.reddit.com/r/pics/.json?raw_json=1&jsonp=`
  );
  if (response.data && response.data.data && response.data.data.children) {
    let picturesList = [];

    //loop through the children to form a single response with only required fields in it
    //ideally this logic should be handled in express layer or backend API
    response.data.data.children.forEach((dt) => {
      let picObject = {};
      if (dt.data) {
        let picsData = dt.data;
        picObject.title = picsData.title;
        picObject.author = picsData.author;
        picObject.thumbnailUrl = picsData.thumbnail;
        picObject.thumbnailWidth = picsData.thumbnail_width;
        picObject.thumbnailHeight = picsData.thumbnail_height;
        if (
          picsData.preview &&
          picsData.preview.images &&
          picsData.preview.images[0]
        ) {
          picObject.pictureUrl = picsData.preview.images[0].source.url;

          picObject.width = picsData.preview.images[0].source.width;
          picObject.height = picsData.preview.images[0].source.height;

          picturesList.push(picObject);
        }
      }
    });
    return picturesList;
  }
};
