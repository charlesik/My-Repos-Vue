<template>
  <div class="main">
    <div class="sidebar">
      <h1>My Github Repositories</h1>
      <div className="repo" v-for="repo in paginated">
        <p>{{ repo.name }}</p>
        <RouterLink :to="`/details/${repo.name}`" className="viewdetails"
          >View Details</RouterLink
        >
      </div>

      <div>
        <ul className="linkButtons">
          <li className="listItem">
            <button @click="prevPage" class="linkItem" :disabled="pageNumber==0">Prev</button>
            <button @click="nextPage" className="linkItem" :disabled="pageNumber>=pageCount-1">Next</button>
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
import { computed } from "@vue/reactivity";

const repos = ref([]);

const getRepos = async () => {
  return fetch("https://api.github.com/users/charlesik/repos").then((res) =>
    res.json()
  );
};
onMounted(() => {
  getRepos().then((data) => (repos.value = data));
  console.log(repos.value);
});
const pageNumber = ref(0);
const size = 5;

function nextPage() {
  pageNumber.value++;
  console.log(pageNumber.value);
}
function prevPage() {
  pageNumber.value--;
}
const pageCount=computed(()=>{
  let l = repos.value.length,
    s = size;
  return Math.ceil(l / s);
})
const startOf = computed(() => {
  return pageNumber.value * size;
});
const endOf = computed(() => {
  return startOf.value + size;
});
const paginated = computed(() => {
  return repos.value.slice(startOf.value, endOf.value);
});
console.log(paginated.value);
</script>

<style lang="scss" scoped></style>
