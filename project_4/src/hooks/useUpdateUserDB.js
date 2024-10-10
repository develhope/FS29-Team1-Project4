import axios from "axios";

export function useUpdateUserDB(user) {
  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/users/${user.id}`,
        user
      );
      console.log("User updated:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  return { onUpdate: handleSubmit };
}
