import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HackathonService {
  constructor() {}
  selectedHackathon = {};

  HackathonData = [
    {
      id: 'H1',
      title: 'Informatica',
      tags: ['Data Analytics'],
      skills: 'informatica powercentre, sql',
      Rules:
        'Time duration of Data Warehouse Skills Contest - Informatica would be 45 minutes for MCQ Round ,Participants will have 2 attempts to solve the round, Online webcam proctoring is mandatory to participate in the challenge. The recorded video will be reviewed by the contest administrator,The participant can use any of the following desktop browsers: Internet Explorer 10+, Google Chrome 53+, Mozilla Firefox 60+.,This challenge can not be taken on mobile.You have to complete the rounds in one go without closing/logging out of the coding window. Contest timer will run continuously once you have started attempting the problem.',
      description:
        ' We are now looking for talented experts to lead innovation towards business sustainability and revolution.',
      prize1: 100000,
      prize2: 75000,
      endsOn: 'Tue Oct 12 2021 00:00:00 GMT+0530 (India Standard Time)',
      createdBy: 'Ashok sharma',
      creationDate: 'date',
    },
    {
      id: 'H2',
      title: 'AI/ML Hackathon - Geek Goddess 2021',
      tags: ['Data Science'],
      skills: ' Machine Learning / Artificial Intelligence',
      Rules:
        'Participants will have 2 attempts to solve the round. Online webcam proctoring is mandatory to participate in the challenge. The recorded video will be reviewed by the contest administrator The participant can use any of the following desktop browsers: Internet Explorer 10+, Google Chrome 53+, Mozilla Firefox 60+.This challenge can not be taken on mobile. You have to complete the round in one go without closing/logging out of the coding window. Contest timer will run continuously once you have started attempting the problem.',

      description:
        'A subset of machine learning is closely related to computational statistics, which focuses on making predictions using computers; but not all machine learning is statistical learning. The study of mathematical optimization delivers methods, theory and application domains to the field of machine learning. Data mining is a related field of study, focusing on exploratory data analysis through unsupervised learning. Some implementations of machine learning use data and neural networks in a way that mimics the working of a biological brain. In its application across business problems, machine learning is also referred to as predictive analytics.',
      prize1: 100000,
      prize2: 75000,
      endsOn: 'Sat Oct 30 2021 00:00:00 GMT+0530 (India Standard Time)',
      createdBy: 'Ashok sharma',
      creationDate: 'date',
    },
  ];

  getHackathonData() {
    return this.HackathonData;
  }

  setSelectedHackathonDetails(selectedHackathon: object) {
    this.selectedHackathon = {};
    this.selectedHackathon = selectedHackathon;
  }

  getSelectedHackathonDetails() {
    return this.selectedHackathon;
  }
}
