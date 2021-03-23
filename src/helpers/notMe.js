export const notMe = (chatConfig, selectedChat) => {
  return selectedChat.people.find(
    p => p.person.username !== chatConfig.userName,
  )?.person?.username;
};
