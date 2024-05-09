type Role = 'admin' | 'manager' | 'guest';
type Sex = 'M' | 'F' | 'O';

interface UserI {
  id: string;
  name: string;
  roles: Role[];
  active: boolean;
  sex: Sex;
}

class App {
  private users: UserI[] = [
    {
      id: 'e32ab',
      name: 'Ali',
      // admin, manager, guest
      roles: ['admin', 'manager'],
      active: true,
      sex: 'M', // M, F, 0
    },
  ];

  addUser(user: UserI): void {
    this.users = [...this.users, user];
  }

  deleteUser(userId: string): void {
    this.users = this.users.filter((user) => user.id !== userId);
  }

  findUserById(userId: string): UserI | null {
    return this.users.find((user) => (user.id = userId)) || null;
  }

  addRole(userId: string, role: Role) {
    const user = this.findUserById(userId);
    if (user && !user.roles.includes(role)) {
      user.roles = [...user.roles, role];
    }
    // TODO update list with the updated user
  }

  disableUser(userId: string): void {
    const user = this.findUserById(userId);
    if (user) {
      user.active = false;
    }
    // TODO update list with the updated user
  }

  removeRole(userId: string, role: Role): void {
    const user = this.findUserById(userId);
    if (user) {
      user.roles = user.roles.filter((role) => role !== role);
    }
    // TODO update list with the updated user
  }
}
