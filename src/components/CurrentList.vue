<template>
  <div class="main">
    <div class="sidebar">
        <h1>My Github Repositories</h1>
    <div className="repo" v-for="repo in repos.slice(firstRepo, lastRepo)">
      <p>{{ repo.name }}</p>
      <RouterLink :to="`/details/${repo.name}`" className="viewdetails">View Details</RouterLink>
      
    </div>
    
    <div>
      <ul className="linkButtons">
        <li className="listItem" v-for="(num, index) in pageNumbers" >
          <button @click="paginate(num)" className="linkItem">{{ num }}</button>
        </li>
      </ul>
    </div>
    
    </div>
    
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";
import RepoDetails from "../views/RepoDetails.vue";


const repos = ref([]);

const getRepos = async () => {
  return fetch("https://api.github.com/users/charlesik/repos").then((res) =>
    res.json()
  );
  
};
onMounted(() => {
  getRepos().then((data) => (repos.value = data));
});

const currentRepos = reactive({count:1});
const reposPerPage = 5;
const lastRepo = currentRepos.count * reposPerPage;
const firstRepo = lastRepo - reposPerPage;
//    const currentPage= repos.slice(firstRepo,lastRepo)
const totalRepos = repos.length;
const paginate = pageNumber => (currentRepos.count = pageNumber);

const pageNumbers = [];
for (let index = 1; index <= Math.ceil(30 / reposPerPage); index++) {
  pageNumbers.push(index);
}
</script>

<style lang="scss" scoped></style>
