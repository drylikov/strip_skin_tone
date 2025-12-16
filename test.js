
import assert from 'node:assert/strict'
import test from 'node:test'
import {stripSkinTone} from './index.js'

test('stripSkinTone', function () {
  assert.equal(stripSkinTone('🎅🏿'), '🎅')
  assert.equal(stripSkinTone('👎🏾'), '👎')
  assert.equal(stripSkinTone('👱🏽'), '👱')
  assert.equal(stripSkinTone('👰🏼'), '👰')
  assert.equal(stripSkinTone('👌🏻'), '👌')

  assert.equal(stripSkinTone('🎅🏿👎🏾👱🏽👰🏼👌🏻'), '🎅👎👱👰👌')
})
