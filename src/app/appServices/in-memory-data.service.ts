import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let vpnContentList = [
      {
        id: 1,
        routeLink: 'create_vpn_connection/1',
        question: 'How to create vpn connection 1?',
        answerShortDescription: `Test description test description test description test description test
            description test description test description test description test description test description 
            test description test description test description test description test description test description`
      },
      {
        id: 2,
        routeLink: 'create_vpn_connection/2',
        question: 'How to create vpn connection 2?',
        answerShortDescription: `Test description test description test description test description test
            description test description test description test description test description test description 
            test description test description test description test description test description test description`
      },
      {
        id: 3,
        routeLink: 'create_vpn_connection/3',
        question: 'How to create vpn connection 3?',
        answerShortDescription: `Test description test description test description test description test
            description test description test description test description test description test description 
            test description test description test description test description test description test description`
      }
    ];

    let vpnContentCompleteDescription = [
      {
        id: 1,
        question: 'How to create vpn connection 1?',
        answerDescription: `Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description 
            Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description`
      },
      {
        id: 2,
        question: 'How to create vpn connection 2?',
        answerDescription: `Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description 
            Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description`
      },
      {
        id: 3,
        question: 'How to create vpn connection 3?',
        answerDescription: `Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description 
            Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description Test description test description test description test description test description test description test description test
            description test description test description test description test description test description test description
            test description test description test description test description test description test description`
      }
    ];

    return { vpnContentList, vpnContentCompleteDescription };
  }
}
