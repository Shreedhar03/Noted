export interface Note {
    id: number;
    title: string;
    text: string;
  }
  
  export const NOTES: Note[] = [
    {
      id: 1,
      title: 'Meeting Notes',
      text: 'Discussed project updates and assigned action items to team members.',
    },
    {
      id: 2,
      title: 'Shopping List',
      text: 'Milk, eggs, bread, fruits, and vegetables.',
    },
    {
      id: 3,
      title: 'Book Recommendations',
      text: 'Consider reading "The Catcher in the Rye" and "To Kill a Mockingbird".',
    },
    {
      id: 4,
      title: 'Travel Plans',
      text: 'Book flight tickets for vacation in July. Research accommodation options.',
    },
    {
      id: 5,
      title: 'Code Snippets',
      text: 'Implement authentication middleware. Refactor database queries for better performance.',
    },
  ];
  