// @ts-check

import {getSceneFromId} from "./sceneParams";

export const Libraries = {
  GoToScene: {
    machineName: 'H5P.GoToScene',
  },
};

/**
 * Get default params for a library
 *
 * @param {string} uberName
 * @returns {Interaction}
 */
export const getDefaultLibraryParams = (uberName) => {
  return {
    interactionpos: '', // Filled in on saving interaction
    action: {
      library: uberName,
      params: {}
    }
  };
};

/**
 * Updates position of interaction in parameters
 *
 * @param {Scene[]} scenes
 * @param {number} sceneId
 * @param {number} interactionIndex
 * @param {CameraPosition} pos
 */
export const updatePosition = (scenes, sceneId, interactionIndex, pos) => {
  const scene = getSceneFromId(scenes, sceneId);
  const interaction = scene.interactions[interactionIndex];

  // Update interaction pos
  interaction.interactionpos = [
    pos.yaw,
    pos.pitch
  ].join(',');
};

/**
 * Checks if an interaction is a GoToScene library
 *
 * @param {Interaction} interaction
 * @returns {boolean}
 */
export const isGoToScene = (interaction) => {
  const library = H5P.libraryFromString(interaction.action.library);
  return library.machineName === Libraries.GoToScene.machineName;
};
