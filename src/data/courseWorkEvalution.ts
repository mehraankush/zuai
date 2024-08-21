
export interface AssessmentType {
    score: string;
    criteria: string;
    title: string;
    ringColor: string;

    content: {
        description: string;
        scope: string[];
        strength: string[];
    };
}

export const scoreData = [
    {
        score: '7/10',
        criteria: 'Criteria A',
        title: 'Understanding Knowledge Question',
        ringColor: 'text-green',
        content: {
            description: 'The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.',
            scope: [
                'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
                'Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.',
            ],
            strength: [
                'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
                'Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.'
            ]
        }
    },
    {
        score: '5/10',
        criteria: 'Criteria B',
        title: 'Understanding Knowledge Question',
        ringColor: 'text-yellow-400',
        content: {
            description: 'The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.',
            scope: [
                'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
                'Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.',
            ],
            strength: [
                'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
                'Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.'
            ]
        }
    },
    {
        score: '3/10',
        criteria: 'Criteria C',
        title: 'Understanding Knowledge Question',
        ringColor: 'text-red-400',
        content: {
            description: 'The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.',
            scope: [
                'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
                'Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.',
            ],
            strength: [
                'Demonstrates a good understanding of the prescribed title and the associated knowledge questions.',
                'Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.'
            ]
        }
    },
]