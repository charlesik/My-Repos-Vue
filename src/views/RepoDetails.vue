<template>
    <div>
        <div className="detailsinfo" >
                <h2>{{repos.name}}</h2>
                <p> {{repos.description}}</p><br>
                <p> <span>Link: </span> {{repos.url}}</p>
                <p> <span>Visibility: </span> {{repos.visibility}}</p>
                <p> <span>Created: </span> {{repos.created_at}}</p>
                <p> <span>Pushed at: </span> {{repos.pushed_at}}</p>
                <p> <span>Last Update: </span> {{repos.updated_at}}</p>
                <p> <span>Open Issues: </span> {{repos.open_issues}}</p>
                <p> <span>Forked: </span> {{repos.forks}} times</p>
            </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';
import router from '../router';
const repos = ref([]);
const route=useRoute()
const getRepos = async () => {
  return fetch(`https://api.github.com/repos/charlesik/${route.params.name}`).then((res) =>
    res.json()
  );
};
onMounted(() => {
  getRepos().then((data) => (repos.value=data));
  console.log(repos.value)
});

</script>

<style lang="scss" scoped>

</style>