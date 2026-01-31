/**
 * GraphQL queries for the application
 */

export const GET_DATA = `
  query MyQuery {
    classes(category: "Art & Illustration", limit: 6) {
      coverImage
      duration
      id
      title
      totalStudents
      teacher {
        name
      }
    }
  }
`;

