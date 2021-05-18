import Link from "next/link";

import { Layout, Bio, SEO } from "@components/common";
//import { getSortedPosts } from "@utils/posts";

export function eightBall() { 
  return  `        <div class="container">
<h1 class="mt-2 text-center">So, did you?!</h1>

<div id="app">
    <div class="eightBall">
        <div class="ball">
            <!-- <div v-if="gameStatus == false" class="bit eightBit">
                <p>8</p>
            </div>
            <div v-else class="bit centerBit">
                <p class="answerBit" v-cloak>{{ this.answer }}</p>
            </div> -->
            <div v-show="!gameStatus" class="bit eightBit">
                <p>8</p>
            </div>
            <div v-show="gameStatus" class="bit centerBit">
                <p class="answerBit" v-cloak>{{ this.answer }}</p>
            </div>
        </div>
    </div>
    <div class="userForm">
        <form @submit.prevent="onEnter">
            <div class="form-group">
                <label for="questionInput">Tell me what you think you did, Find out if you did that already: </label>
                <input v-model="question" type="text" class="form-control" id="questionInput" aria-describedby="questionInput">
            </div>
            <button @click.prevent="onEnter" type="submit" class="btn btn-submit">Submit</button>
        </form>
    </div>
</div>

</div>
<!-- BOOTSTRAP -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
<!-- BOOTSTRAP ENDS -->

<!-- VUE.JS -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- VUE.JS ENDS -->

<!-- OTHER SCRIPTS -->
<script src="8ballscript.js"></script>
<!-- OTHER SCRIPTS END -->`;
}



export default function Home() {
  //{ posts }) {

  return (
    <Layout>
      <SEO title="All posts" />
      <Bio className="my-14" /> 
      <div dangerouslySetInnerHTML={{ __html: eightBall() }} ></div>
    </Layout>
  );


}

/* export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
 */