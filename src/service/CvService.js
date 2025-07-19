import {postData} from '../util/api';
import API_URLS from '../util/rest';

// Get CV image
function getImageUrls(params = {}) {
    return postData(API_URLS.GET_CV_IMAGE, params);
}

function getCvPdf(params = {}) {
    return postData(API_URLS.GET_CV_PDF, params);
}

export { getImageUrls, getCvPdf };