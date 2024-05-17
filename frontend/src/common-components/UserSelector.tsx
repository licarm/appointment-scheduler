import { MenuItem, Select, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { User } from "src/Types";

const UserSelector = ({ userType = 'coach', currentUser, setCurrentUser }: { 
  userType: string,
  currentUser?: User, 
  setCurrentUser: any 
}) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      let data
      try {
        const res = await fetch('http://localhost:8080/users');
        data = await res.json();

      } catch (e) {
        console.log(e)
      }
      setUsers(data);
      return data;
    }

    fetchUsers();
  }, []);

  return (
    <>
      <StyledSelect
        labelId='select-user'
        label={'Name'}
        value={currentUser?.name || ''}
      >
        {/* <MenuItem value='123' key='default'>123</MenuItem> */}
        {
          users.map((user, idx) => {
            console.log(userType)
            if (userType.includes(user.user_type)) {
              return (
                <MenuItem
                  value={user.name}
                  key={user.name}
                  onClick={() => {
                    setCurrentUser(user);
                    console.log(currentUser);
                  }}
                >{user.name}</MenuItem>
              )
            }
          })
        }
      </StyledSelect>
    </>
  )
};

const StyledSelect = styled(Select)`
  color: white;
  height: 100px;
`;

export default UserSelector;
