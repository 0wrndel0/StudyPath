let users = [
    {
      id: 1,
      nome: "Wendel",
      email: "wendel@email.com"
    }
  ];
  
  export const getUsers = (req, res) => {
    res.json(users);
  };
  
  export const createUser = (req, res) => {
    const { nome, email } = req.body;
  
    const newUser = {
      id: users.length + 1,
      nome,
      email
    };
  
    users.push(newUser);
  
    res.status(201).json(newUser);
  };