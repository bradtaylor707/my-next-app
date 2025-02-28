import { faker } from "@faker-js/faker";

export async function getUsers() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return new Array(50).fill(null).map(() => {
    return faker.person.fullName();
  });
}

export async function saveUser() {}
