window.location.hash="no-back-button";
window.location.hash="Again-No-back-button";//again because google chrome don't insert first hash into history
window.onhashchange=function(){window.location.hash="no-back-button";}

const postUrl = 'https://my-json-server.typicode.com/VajihuddinAhmed/Job_Board_API/postjobs';

const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});
    
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();
  
      URL.revokeObjectURL(a.href);
  };
  
  document.querySelector('#endBtn').addEventListener('click', () => {
   const studentData = {
        Exam: localStorage.getItem('Exam'),
        Email: localStorage.getItem('Email:'),
        Code: localStorage.getItem('Code:'),
        Name: localStorage.getItem('Name:'),
        ID: localStorage.getItem('ID:'),
        firstAnswer: localStorage.getItem('firstAnswer'),
        secondAnswer: localStorage.getItem('secondAnswer'),
        thirdAnswer: localStorage.getItem('thirdAnswer'),
        fourthAnswer: localStorage.getItem('fourthAnswer'),
        fifthAnswer: localStorage.getItem('fifthAnswer')
   }

   fetch(postUrl, {
    method: 'POST',
    body: JSON.stringify(studentData),
    headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err))

   let xyz = JSON.stringify(studentData)
    
    downloadToFile(xyz, 'Answers.json', 'text/json');
    document.querySelector('#closeTab').textContent = 'Please close the tab.'
    document.getElementById("endBtn").disabled = true;
  });