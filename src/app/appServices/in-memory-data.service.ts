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

    let cloudContentList = [
      {
        id: 1,
        routeLink: 'create_cloud/1',
        question: 'How to create cloud ?',
        answerShortDescription: `Test description test description test description test description test
            description test description test description test description test description test description 
            test description test description test description test description test description test description`
      },
      {
        id: 2,
        routeLink: 'how_to_resolve_this_in_cloud/2',
        question: 'How to resolve this in cloud?',
        answerShortDescription: `Test description test description test description test description test
            description test description test description test description test description test description 
            test description test description test description test description test description test description`
      }
    ];

    let cloudContentCompleteDescription = [
      {
        id: 1,
        question: 'How to create cloud ?',
        answerDescription: `<p><i class="fa fa-book fa-1x fa-fw" aria-hidden="true"></i>
        <b>Test description</b> test description test description test description test description test description test description test
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
            test description test description test description test description test description test description</p>`
      },
      {
        id: 2,
        question: 'How to resolve this in cloud?',
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

    let dashboardContentList = {
      mostViewed: [
        {

        }
      ],
      dashboardContents: [
        {

        }
      ]
    };

    return { 
      vpnContentList, 
      vpnContentCompleteDescription, 
      cloudContentList, 
      cloudContentCompleteDescription, 
      dashboardContentList 
    };
  }
}
