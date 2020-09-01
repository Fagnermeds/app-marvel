const changeHeroName = (name: string) => {
  const isContainsParenthesis = name.includes("(");
  const isContainsBar = name.includes("/");
  
  if (isContainsParenthesis && isContainsBar) {
    const [firstName, secondName] = name.replace(" (", "/").split("/");
  
    return {
      firstName,
      secondName,
    };
  } else if (isContainsParenthesis) {
    const [firstName, secondName] = name.replace(")", "").split(" (");

    return {
      firstName,
      secondName,
    }
  }

  return {};
}

export default changeHeroName;