<template>
    <div class="in">
        <!-- 评价页面 -->
        <comment-box :id="$route.params.id"></comment-box>
    </div>
</template>

<script>
import commentBox from "@/base/comment/comment";
export default {
    components: {
        commentBox
    }
}
</script>

<style>

</style>
