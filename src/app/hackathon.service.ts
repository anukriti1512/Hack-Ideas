import { Injectable } from '@angular/core';
import { hackathonData } from './data';

@Injectable({
  providedIn: 'root',
})
export class HackathonService {
  constructor() {}
  selectedHackathon = {};
  loggedInuser = '';
  UserVotes: any = { AC123: ['H1'] };
  totalVotesCount: any = {
    H1: 4,
    H2: 5,
    H3: 2,
    H4: 16,
    H5: 8,
  };
  HackathonData = hackathonData;

  setUserId(employeeId: string) {
    this.loggedInuser = employeeId;
  }
  getLoggedInUser() {
    return this.loggedInuser;
  }

  getHackathonData() {
    return this.HackathonData;
  }

  getTotalHackathonCount() {
    return this.HackathonData.length;
  }

  setSelectedHackathonDetails(selectedHackathon: object) {
    this.selectedHackathon = {};
    this.selectedHackathon = selectedHackathon;
  }

  getSelectedHackathonDetails() {
    return this.selectedHackathon;
  }
  updateHackathonIdea(idea: any) {
    this.HackathonData.push(idea);
  }

  updateVotesCount(id: any, operation: string) {
    if (operation === 'add') {
      this.totalVotesCount[id]++;
    } else if (operation === 'delete') {
      this.totalVotesCount[id]--;
    } else if (operation === 'create') {
      this.totalVotesCount[id] = 0;
    }
    console.log(this.totalVotesCount);
  }

  UpdateuserVotes(id: any, hackathonId: any) {
    let operation = '';
    if (Object.keys(this.UserVotes).includes(id)) {
      if (this.UserVotes[id].includes(hackathonId)) {
        this.UserVotes[id].splice(this.UserVotes[id].indexOf(hackathonId), 1);
        operation = 'delete';
      } else {
        this.UserVotes[id].push(hackathonId);
        operation = 'add';
      }
    } else {
      this.UserVotes[id] = [hackathonId];
      operation = 'add';
    }

    console.log(this.UserVotes);
    this.updateVotesCount(hackathonId, operation);
  }
  getTotalVotesCount() {
    return this.totalVotesCount;
  }
  getUserVotesData(id: any) {
    return this.UserVotes[id];
  }
}
