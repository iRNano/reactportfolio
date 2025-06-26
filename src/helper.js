// https://drive.google.com/drive/folders/1rzyV4B-fES25JiDExWyCyjWUtU5tUt-S?usp=sharing
// https://drive.google.com/drive/folders/1rzyV4B-fES25JiDExWyCyjWUtU5tUt-S?usp=sharing
// AIzaSyDHPaEgbcZBxNauw2Py8NDxUQnJ0NzoR7U
export const getCV = async () => {
    const folderId = '1rzyV4B-fES25JiDExWyCyjWUtU5tUt-S';
    const apiKey = "AIzaSyDHPaEgbcZBxNauw2Py8NDxUQnJ0NzoR7U";
    const fileName = 'Valdepenas_Adrian.pdf';

    const res = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+name='${fileName}'&key=${apiKey}`
    );

  const data = await res.json();
  if (data.files?.length > 0) {
    const fileId = data.files[0].id;
    const viewLink = `https://drive.google.com/file/d/${fileId}/preview`;
    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const links = { view: viewLink, download: downloadLink };
    localStorage.setItem('cv_links', JSON.stringify(links));
    return { viewLink, downloadLink };
  } else {
    return null;
  }
}