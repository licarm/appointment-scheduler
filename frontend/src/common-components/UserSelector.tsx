import { MenuItem, Select, styled } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { UserContext } from "src/utils/UserContext";
import { User } from "src/Types";

const UserSelector = ({currentUser, setCurrentUser}: {currentUser?: User, setCurrentUser: any}) => {
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
          <MenuItem value='123' key='default'>123</MenuItem>
          {
            users.map((user, idx) => {
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

const useSetCurrentUser = (user: User) => {
  useEffect(() => {

  }, [user]);
}

export default UserSelector;
