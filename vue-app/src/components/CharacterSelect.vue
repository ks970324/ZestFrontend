<template>
  <div class="character_title">
    <span>Choose your Character</span>
  </div>

  <div class="character">
    <div class="character_choose">
      <!-- Gender -->
      <div class="character_gender">
        <div class="character_text_gender">Gender</div>
        <div class="character_icon_gender">
          <div
              v-for="option in genders"
              :key="option"
              class="gender-icon"
              @click="character.gender = option"
          >
            <img :src="`material/gender-${option[0]}.png`" :alt="option" />
          </div>
        </div>
      </div>

      <!-- Hair -->
      <div class="character_hair">
        <div class="character_text_hair">Hair Color</div>
        <div class="character_color_hair">
          <div
              v-for="color in hairs"
              :key="color"
              class="hair-color"
              @click="character.hair = color"
          >
            <img :src="`material/${color}color.png`" :alt="color" />
          </div>
        </div>
      </div>

      <!-- Clothes -->
      <div class="character_cloth">
        <div class="character_text_cloth">Clothes Color</div>
        <div class="character_color_cloth">
          <div
              v-for="color in clothes"
              :key="color"
              class="clothes-color"
              @click="character.clothes = color"
          >
            <img :src="`material/${color}color.png`" :alt="color" />
          </div>
        </div>
      </div>
    </div>

    <!-- 角色圖片 -->
    <div class="character_img">
      <img :src="characterImage" alt="character" id="characterImg" />
    </div>
  </div>

</template>

<script setup>
import { reactive, computed,watch } from 'vue'
import { useRegisterStore } from '../stores/register'

const registerStore = useRegisterStore()

// 狀態
const character = reactive({
  gender: 'boy',
  hair: 'brown',
  clothes: 'blue',
})

// 可選項目
const genders = ['boy', 'girl']
const hairs = ['black', 'orange', 'brown']
const clothes = ['blue', 'darkgreen', 'gray']


// 計算圖片來源
const characterImage = computed(() => {
  return `/material/${character.gender}_${character.hair}_${character.clothes}.png`
})

watch(character, () => {
  registerStore.characterspath = characterImage.value
}, { deep: true, immediate: true })

</script>

<style scoped>
.character_title {
  font-size: 22px;
  text-align: center;
  margin-bottom: 5%;
}

.character {
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
}

.character_choose {
  display: grid;
  grid-auto-rows: 1fr;
  row-gap: 5%;
  margin-left: 5%;
}

.character_gender,
.character_cloth,
.character_hair {
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 80px;
}

.character_icon_gender {
  display: flex;
  cursor: pointer;
}

.character_icon_gender img {
  width: 40px;
  margin-right: 30px;

}


.character_color_hair,
.character_color_cloth {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  cursor: pointer;

}

.character_color_hair img,
.character_color_cloth img {
  width: 35%;
  border: 2px solid rgba(132, 87, 54, 0.2);
}

.character_img {
  display: grid;
  place-items: center;
  width: 100%;
  margin-left:-30%;
  margin-top: 20%;
}

.character_img img {
  width: 80%;
}

</style>
