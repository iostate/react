const {GraphQLServer} = require('graphql-yoga');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/brent');

const User = mongoose.model('User', {
  userName: String,
  indicator: String,
  startingTime: Number,
  closingTime: Number,
});

const typeDefs = `
    type Query {
        hello(userName: String): String! 
        users: [User]
    }
    type User {
        id: ID!
        userName: String!
        indicator: String!
        startingTime: ID!
        closingTime: ID!
    }
    type Mutation {
      createUser(userName: String!, indicator: String!, startingTime: ID!, closingTime: ID!): User
      updateUser(id: ID!, userName: String, indicator: String, startingTime: ID, closingTIme: ID): Boolean
      removeUser(id: ID!): Boolean
    }
`;

const resolvers = {
  Query: {
    hello: (_, {firstName}) => `Hello ${userName || 'World'}`,
    users: () => User.find(),
  },

  Mutation: {
    createUser: async (_, {userName, indicator, startingTime, closingTime}) => {
      const user = new User({
        userName,
        indicator,
        startingTime,
        closingTime,
      });
      await user.save();
      return true;
    },
    updateUser: async (_, {userName, indicator, startingTime, closingTime}) => {
      await User.findByIdAndUpdate(id, {
        userName,
        indicator,
        startingTime,
        closingTime,
      });
      return true;
    },
    removeUser: async (_, {user, indicator, startingTime, closingTime}) => {
      await User.findByIdAndRemove(id);
      return true;
    },
  },
};

const db = mongoose.connection;

const server = new GraphQLServer({typeDefs, resolvers});
db.once('open', function() {
  server.start(() => console.log('Server is running on localhost:4000'));
});
