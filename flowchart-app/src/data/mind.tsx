import { MindNode } from '../components/MindMap';

export const CerebrumNode: MindNode = {
    id: 'cognitiveProcessingUnit',
    title: 'Cognitive Processing Unit',
    description:
        'Responsible for higher cognitive functions, motor control, and sensory processing.',
    function:
        'Enables conscious thought, decision-making, memory, language, and voluntary movement.',
    location: 'Upper part of the brain',
    children: [
        {
            id: 'executiveControlCenter',
            title: 'Executive Control Center',
            description:
                'Handles executive functions, decision-making, and motor control.',
            function:
                'Facilitates planning, problem-solving, emotional regulation, and voluntary movement.',
            location: 'Front of the cerebrum',
            children: [
                {
                    id: 'decisionMakingManager',
                    title: 'Decision-Making Manager',
                    description:
                        'Manages complex cognitive behaviors and decision-making processes.',
                    function:
                        'Oversees executive functions, working memory, and social behavior.',
                    location: 'Anterior portion of the frontal lobe',
                    children: [
                        {
                            id: 'cognitiveControlSupervisor',
                            title: 'Cognitive Control Supervisor',
                            description:
                                'Supervises higher-level cognitive functions.',
                            function:
                                'Manages working memory, cognitive flexibility, and abstract reasoning.',
                            location: 'Upper portion of the prefrontal cortex',
                            children: [
                                {
                                    id: 'workingMemoryManager',
                                    title: 'Working Memory Manager',
                                    description:
                                        'Manages temporary storage and manipulation of information.',
                                    function:
                                        'Enables short-term retention and processing of task-relevant information.',
                                    location: 'Dorsolateral prefrontal cortex',
                                },
                                {
                                    id: 'cognitiveFlexibilityController',
                                    title: 'Cognitive Flexibility Controller',
                                    description:
                                        'Controls the ability to switch between tasks or mental sets.',
                                    function:
                                        'Facilitates adaptation to changing environments and demands.',
                                    location:
                                        'Anterior portion of the dorsolateral prefrontal cortex',
                                },
                                {
                                    id: 'abstractReasoningEngine',
                                    title: 'Abstract Reasoning Engine',
                                    description:
                                        'Enables higher-level reasoning and problem-solving.',
                                    function:
                                        'Facilitates complex cognitive operations and logical thinking.',
                                    location: 'Rostrolateral prefrontal cortex',
                                },
                            ],
                        },
                        {
                            id: 'emotionalRegulationSpecialist',
                            title: 'Emotional Regulation Specialist',
                            description:
                                'Specializes in emotional processing and regulation.',
                            function:
                                'Regulates emotions, processes rewards, and influences decision-making.',
                            location: 'Lower portion of the prefrontal cortex',
                            children: [
                                {
                                    id: 'emotionRegulationController',
                                    title: 'Emotion Regulation Controller',
                                    description:
                                        'Controls and modulates emotional responses.',
                                    function:
                                        'Enables appropriate emotional expression and behavior.',
                                    location: 'Ventromedial prefrontal cortex',
                                },
                                {
                                    id: 'rewardProcessingUnit',
                                    title: 'Reward Processing Unit',
                                    description:
                                        'Processes rewarding stimuli and motivational information.',
                                    function:
                                        'Facilitates goal-directed behavior and decision-making.',
                                    location: 'Orbitofrontal cortex',
                                },
                                {
                                    id: 'emotionalDecisionMakingModulator',
                                    title: 'Emotional Decision-Making Modulator',
                                    description:
                                        'Modulates decision-making processes based on emotional information.',
                                    function:
                                        'Integrates emotional and cognitive information for adaptive decision-making.',
                                    location: 'Ventrolateral prefrontal cortex',
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'movementCoordinator',
                    title: 'Movement Coordinator',
                    description: 'Coordinates and executes voluntary movement.',
                    function: 'Initiates and coordinates muscle movements.',
                    location: 'Posterior portion of the frontal lobe',
                    children: [
                        {
                            id: 'voluntaryMovementInitiator',
                            title: 'Voluntary Movement Initiator',
                            description:
                                'Initiates and directly controls voluntary movements.',
                            function: 'Executes voluntary muscle movements.',
                            location:
                                'Posterior portion of the frontal lobe, along the precentral gyrus',
                            children: [
                                {
                                    id: 'motorCommandGenerator',
                                    title: 'Motor Command Generator',
                                    description:
                                        'Generates specific motor commands for voluntary movements.',
                                    function:
                                        'Translates movement intentions into motor neuron activation patterns.',
                                    location: 'Primary motor cortex',
                                },
                                {
                                    id: 'motorOutputController',
                                    title: 'Motor Output Controller',
                                    description:
                                        'Controls the output of motor commands to the spinal cord.',
                                    function:
                                        'Regulates the strength and timing of muscle contractions.',
                                    location: 'Corticospinal tract',
                                },
                                {
                                    id: 'motorFeedbackProcessor',
                                    title: 'Motor Feedback Processor',
                                    description:
                                        'Processes sensory feedback from the body during movement.',
                                    function:
                                        'Monitors and adjusts movements based on proprioceptive information.',
                                    location: 'Primary somatosensory cortex',
                                },
                            ],
                        },
                        {
                            id: 'movementPlanningAssistant',
                            title: 'Movement Planning Assistant',
                            description:
                                'Assists in planning and coordinating complex movements.',
                            function:
                                'Plans and coordinates complex motor sequences.',
                            location:
                                'Regions adjacent to the primary motor cortex',
                            children: [
                                {
                                    id: 'motorSequencePlanner',
                                    title: 'Motor Sequence Planner',
                                    description:
                                        'Plans the order and timing of movements in a sequence.',
                                    function:
                                        'Organizes and schedules the execution of complex motor tasks.',
                                    location: 'Supplementary motor area',
                                },
                                {
                                    id: 'motorCoordinationManager',
                                    title: 'Motor Coordination Manager',
                                    description:
                                        'Manages the coordination of different muscle groups.',
                                    function:
                                        'Ensures smooth and efficient execution of complex movements.',
                                    location: 'Premotor cortex',
                                },
                                {
                                    id: 'motorLearningFacilitator',
                                    title: 'Motor Learning Facilitator',
                                    description:
                                        'Facilitates the acquisition and refinement of motor skills.',
                                    function:
                                        'Enables the learning and improvement of complex motor tasks.',
                                    location: 'Dorsolateral prefrontal cortex',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'sensoryIntegrationHub',
            title: 'Sensory Integration Hub',
            description:
                'Integrates and processes sensory information and spatial awareness.',
            function:
                'Integrates sensory information, spatial navigation, and touch perception.',
            location: 'Upper middle part of the cerebrum',
            children: [
                {
                    id: 'touchPerceptionProcessor',
                    title: 'Touch Perception Processor',
                    description: 'Processes sensory information from the body.',
                    function:
                        'Processes touch, pressure, temperature, and pain sensations.',
                    location: 'Anterior portion of the parietal lobe',
                    children: [
                        {
                            id: 'tactileSensationReceiver',
                            title: 'Tactile Sensation Receiver',
                            description:
                                'Receives and processes tactile information.',
                            function:
                                'Processes tactile sensations from the body.',
                            location:
                                'Anterior portion of the parietal lobe, along the postcentral gyrus',
                            children: [
                                {
                                    id: 'pressureDetector',
                                    title: 'Pressure Detector',
                                    description:
                                        'Detects and processes pressure sensations.',
                                    function:
                                        'Enables the perception of pressure applied to the skin.',
                                    location: 'Brodmann area 3b',
                                },
                                {
                                    id: 'textureSensationProcessor',
                                    title: 'Texture Sensation Processor',
                                    description:
                                        'Processes sensations related to texture.',
                                    function:
                                        'Enables the perception of surface texture and roughness.',
                                    location: 'Brodmann area 1',
                                },
                                {
                                    id: 'temperatureAnalyzer',
                                    title: 'Temperature Analyzer',
                                    description:
                                        'Analyzes and processes temperature sensations.',
                                    function:
                                        'Enables the perception of heat and cold.',
                                    location: 'Insular cortex',
                                },
                            ],
                        },
                        {
                            id: 'tactileInformationIntegrator',
                            title: 'Tactile Information Integrator',
                            description:
                                'Further processes and integrates tactile information.',
                            function:
                                'Integrates and interprets tactile sensations.',
                            location:
                                'Region adjacent to the primary somatosensory cortex',
                            children: [
                                {
                                    id: 'touchLocalizationProcessor',
                                    title: 'Touch Localization Processor',
                                    description:
                                        'Processes the location of tactile stimuli on the body.',
                                    function:
                                        'Enables the spatial localization of touch sensations.',
                                    location: 'Brodmann area 2',
                                },
                                {
                                    id: 'tactileObjectRecognizer',
                                    title: 'Tactile Object Recognizer',
                                    description:
                                        'Recognizes objects through tactile exploration.',
                                    function:
                                        'Enables the identification of objects based on touch alone.',
                                    location: 'Secondary somatosensory cortex',
                                },
                                {
                                    id: 'tactileMemoryManager',
                                    title: 'Tactile Memory Manager',
                                    description:
                                        'Manages the storage and retrieval of tactile memories.',
                                    function:
                                        'Enables the recognition of familiar tactile sensations.',
                                    location: 'Posterior parietal cortex',
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'spatialNavigationService',
                    title: 'Spatial Navigation Service',
                    description: 'Handles spatial awareness and navigation.',
                    function:
                        'Integrates visual and spatial information for guiding movement.',
                    location: 'Posterior portion of the parietal lobe',
                    children: [
                        {
                            id: 'spatialAttentionManager',
                            title: 'Spatial Attention Manager',
                            description:
                                'Manages and directs spatial attention.',
                            function:
                                'Controls spatial attention and integrates sensory information.',
                            location:
                                'Upper portion of the posterior parietal cortex',
                            children: [
                                {
                                    id: 'spatialAttentionShifter',
                                    title: 'Spatial Attention Shifter',
                                    description:
                                        'Shifts attention between different spatial locations.',
                                    function:
                                        'Enables the rapid reallocation of attentional resources.',
                                    location: 'Intraparietal sulcus',
                                },
                                {
                                    id: 'visualSpatialIntegrator',
                                    title: 'Visual-Spatial Integrator',
                                    description:
                                        'Integrates visual and spatial information.',
                                    function:
                                        'Combines visual input with spatial representations.',
                                    location: 'Precuneus',
                                },
                                {
                                    id: 'eyeMovementController',
                                    title: 'Eye Movement Controller',
                                    description:
                                        'Controls eye movements for visual exploration.',
                                    function:
                                        'Directs eye movements to gather visual information.',
                                    location: 'Frontal eye fields',
                                },
                            ],
                        },
                        {
                            id: 'bodyAwarenessMonitor',
                            title: 'Body Awareness Monitor',
                            description:
                                'Monitors body awareness and tool use.',
                            function:
                                'Processes body schema and coordinates hand-eye movements.',
                            location:
                                'Lower portion of the posterior parietal cortex',
                            children: [
                                {
                                    id: 'bodySchemaProcessor',
                                    title: 'Body Schema Processor',
                                    description:
                                        'Processes the representation of the body in space.',
                                    function:
                                        "Maintains an internal model of the body's position and configuration.",
                                    location: 'Superior parietal lobule',
                                },
                                {
                                    id: 'toolUseCoordinator',
                                    title: 'Tool Use Coordinator',
                                    description:
                                        'Coordinates the use of tools and objects.',
                                    function:
                                        'Enables the skillful manipulation of tools and objects.',
                                    location: 'Inferior parietal lobule',
                                },
                                {
                                    id: 'handEyeMovementSynchronizer',
                                    title: 'Hand-Eye Movement Synchronizer',
                                    description:
                                        'Synchronizes hand and eye movements.',
                                    function:
                                        'Coordinates hand and eye movements for precise interactions.',
                                    location: 'Parieto-occipital junction',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'auditoryMemoryManager',
            title: 'Auditory and Memory Manager',
            description:
                'Manages auditory information processing, language, and memory formation.',
            function:
                'Facilitates hearing, language comprehension, and long-term memory formation.',
            location: 'Lower sides of the cerebrum',
            children: [
                {
                    id: 'soundInterpretationService',
                    title: 'Sound Interpretation Service',
                    description:
                        'Processes and interprets auditory information.',
                    function: 'Perceives and interprets sounds and speech.',
                    location: 'Upper portion of the temporal lobe',
                    children: [
                        {
                            id: 'auditorySignalReceiver',
                            title: 'Auditory Signal Receiver',
                            description:
                                'Receives and processes auditory information.',
                            function:
                                'Processes basic auditory features like pitch and intensity.',
                            location:
                                'Upper portion of the temporal lobe, within the superior temporal gyrus',
                            children: [
                                {
                                    id: 'frequencyAnalyzer',
                                    title: 'Frequency Analyzer',
                                    description:
                                        'Analyzes the frequency components of auditory signals.',
                                    function:
                                        'Enables the perception of pitch and tone.',
                                    location: "Heschl's gyrus",
                                },
                                {
                                    id: 'intensityProcessor',
                                    title: 'Intensity Processor',
                                    description:
                                        'Processes the intensity of auditory signals.',
                                    function:
                                        'Enables the perception of loudness.',
                                    location: 'Planum temporale',
                                },
                                {
                                    id: 'soundLocalizationProcessor',
                                    title: 'Sound Localization Processor',
                                    description:
                                        'Processes the spatial location of sounds.',
                                    function:
                                        'Enables the localization of sound sources in space.',
                                    location:
                                        'Posterior superior temporal gyrus',
                                },
                            ],
                        },
                        {
                            id: 'complexSoundAnalyzer',
                            title: 'Complex Sound Analyzer',
                            description:
                                'Analyzes and interprets complex sounds.',
                            function:
                                'Processes complex sounds, including speech and music.',
                            location:
                                'Regions adjacent to the primary auditory cortex',
                            children: [
                                {
                                    id: 'phonemeProcessor',
                                    title: 'Phoneme Processor',
                                    description:
                                        'Processes the basic units of speech sounds.',
                                    function:
                                        'Enables the perception and discrimination of phonemes.',
                                    location: 'Superior temporal sulcus',
                                },
                                {
                                    id: 'prosodyAnalyzer',
                                    title: 'Prosody Analyzer',
                                    description:
                                        'Analyzes the rhythm, stress, and intonation of speech.',
                                    function:
                                        'Enables the perception of emotional and linguistic prosody.',
                                    location:
                                        'Right hemisphere superior temporal gyrus',
                                },
                                {
                                    id: 'musicPerceptionProcessor',
                                    title: 'Music Perception Processor',
                                    description:
                                        'Processes the perception of musical elements.',
                                    function:
                                        'Enables the perception of melody, harmony, and rhythm.',
                                    location:
                                        'Bilateral superior temporal gyrus',
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'longTermMemoryStorage',
                    title: 'Long-Term Memory Storage',
                    description: 'Stores and consolidates long-term memories.',
                    function: 'Forms and stores long-term memories.',
                    location: 'Medial portion of the temporal lobe',
                    children: [
                        {
                            id: 'memoryEncodingFacilitator',
                            title: 'Memory Encoding Facilitator',
                            description:
                                'Facilitates the formation of new memories.',
                            function:
                                'Facilitates the encoding of new memories.',
                            location: 'Innermost portion of the hippocampus',
                            children: [
                                {
                                    id: 'patternSeparator',
                                    title: 'Pattern Separator',
                                    description:
                                        'Separates similar patterns of neural activity.',
                                    function:
                                        'Enables the formation of distinct memory representations.',
                                    location: 'Dentate gyrus',
                                },
                                {
                                    id: 'neuralActivityMapper',
                                    title: 'Neural Activity Mapper',
                                    description:
                                        'Maps neural activity patterns to specific memories.',
                                    function:
                                        'Associates neural activity with memory content.',
                                    location: 'CA3 region of the hippocampus',
                                },
                                {
                                    id: 'memoryIndexGenerator',
                                    title: 'Memory Index Generator',
                                    description:
                                        'Generates indices for memory retrieval.',
                                    function:
                                        'Creates a searchable index of stored memories.',
                                    location: 'CA1 region of the hippocampus',
                                },
                            ],
                        },
                        {
                            id: 'memoryConsolidationManager',
                            title: 'Memory Consolidation Manager',
                            description:
                                'Manages the consolidation of memories.',
                            function:
                                'Consolidates and stores long-term memories.',
                            location:
                                'Region of the hippocampus adjacent to the dentate gyrus',
                            children: [
                                {
                                    id: 'memoryReactivationController',
                                    title: 'Memory Reactivation Controller',
                                    description:
                                        'Controls the reactivation of stored memories.',
                                    function:
                                        'Enables the retrieval and reactivation of consolidated memories.',
                                    location: 'Subiculum',
                                },
                                {
                                    id: 'memoryTransferCoordinator',
                                    title: 'Memory Transfer Coordinator',
                                    description:
                                        'Coordinates the transfer of memories to long-term storage.',
                                    function:
                                        'Facilitates the gradual transfer of memories to neocortical regions.',
                                    location: 'Entorhinal cortex',
                                },
                                {
                                    id: 'memoryUpdateManager',
                                    title: 'Memory Update Manager',
                                    description:
                                        'Manages the updating and modification of stored memories.',
                                    function:
                                        'Enables the integration of new information into existing memories.',
                                    location: 'Perirhinal cortex',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'visualProcessingCenter',
            title: 'Visual Processing Center',
            description: 'Processes and interprets visual information.',
            function:
                'Processes visual information and interprets visual stimuli.',
            location: 'Back of the cerebrum',
            children: [
                {
                    id: 'visualFeatureExtractor',
                    title: 'Visual Feature Extractor',
                    description:
                        'Extracts basic visual features from visual information.',
                    function:
                        'Processes basic visual features like edges, shapes, and colors.',
                    location: 'Posterior portion of the occipital lobe',
                    children: [
                        {
                            id: 'primaryVisualProcessor',
                            title: 'Primary Visual Processor',
                            description:
                                'Performs primary processing of visual information.',
                            function:
                                'Processes basic visual features and patterns.',
                            location:
                                'Posterior portion of the occipital lobe, along the calcarine sulcus',
                            children: [
                                {
                                    id: 'edgeDetector',
                                    title: 'Edge Detector',
                                    description:
                                        'Detects edges and contours in the visual input.',
                                    function:
                                        'Enables the perception of object boundaries and shapes.',
                                    location: 'V1 (primary visual cortex)',
                                },
                                {
                                    id: 'colorProcessor',
                                    title: 'Color Processor',
                                    description:
                                        'Processes color information in the visual input.',
                                    function:
                                        'Enables the perception of color.',
                                    location: 'V1 (primary visual cortex)',
                                },
                                {
                                    id: 'contrastAnalyzer',
                                    title: 'Contrast Analyzer',
                                    description:
                                        'Analyzes the contrast and brightness of the visual input.',
                                    function:
                                        'Enables the perception of light intensity differences.',
                                    location: 'V1 (primary visual cortex)',
                                },
                            ],
                        },
                        {
                            id: 'secondaryVisualProcessor',
                            title: 'Secondary Visual Processor',
                            description:
                                'Performs secondary processing of visual information.',
                            function:
                                'Processes more complex visual features and patterns.',
                            location:
                                'Region adjacent to V1 in the primary visual cortex',
                            children: [
                                {
                                    id: 'lineOrientationDetector',
                                    title: 'Line Orientation Detector',
                                    description:
                                        'Detects the orientation of lines and edges.',
                                    function:
                                        'Enables the perception of object orientation and texture.',
                                    location: 'V2 (secondary visual cortex)',
                                },
                                {
                                    id: 'depthPerceptionProcessor',
                                    title: 'Depth Perception Processor',
                                    description:
                                        'Processes depth cues in the visual input.',
                                    function:
                                        'Enables the perception of three-dimensional depth.',
                                    location: 'V2 (secondary visual cortex)',
                                },
                                {
                                    id: 'textureSegregator',
                                    title: 'Texture Segregator',
                                    description:
                                        'Segregates regions of different textures.',
                                    function:
                                        'Enables the perception of distinct surface textures.',
                                    location: 'V2 (secondary visual cortex)',
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'visualInterpretationService',
                    title: 'Visual Interpretation Service',
                    description:
                        'Interprets and recognizes complex visual information.',
                    function:
                        'Recognizes faces, objects, and complex visual scenes.',
                    location: 'Surrounding the primary visual cortex',
                    children: [
                        {
                            id: 'dorsalStreamProcessor',
                            title: 'Dorsal Stream Processor',
                            description:
                                'Processes spatial and motion information.',
                            function:
                                'Processes spatial relationships and motion of visual stimuli.',
                            location:
                                'Region adjacent to V2 in the visual association areas',
                            children: [
                                {
                                    id: 'motionDetector',
                                    title: 'Motion Detector',
                                    description:
                                        'Detects motion in the visual input.',
                                    function:
                                        'Enables the perception of object and scene motion.',
                                    location:
                                        'V5/MT (middle temporal visual area)',
                                },
                                {
                                    id: 'spatialRelationshipAnalyzer',
                                    title: 'Spatial Relationship Analyzer',
                                    description:
                                        'Analyzes the spatial relationships between objects.',
                                    function:
                                        'Enables the perception of object positions and spatial layout.',
                                    location: 'Posterior parietal cortex',
                                },
                                {
                                    id: 'actionPlanningAssistant',
                                    title: 'Action Planning Assistant',
                                    description:
                                        'Assists in planning actions based on visual input.',
                                    function:
                                        'Enables the planning of motor actions in response to visual stimuli.',
                                    location: 'Posterior parietal cortex',
                                },
                            ],
                        },
                        {
                            id: 'ventralStreamProcessor',
                            title: 'Ventral Stream Processor',
                            description:
                                'Processes color and form information.',
                            function:
                                'Processes color, form, and object recognition.',
                            location:
                                'Region adjacent to V2 in the visual association areas',
                            children: [
                                {
                                    id: 'colorPatternRecognizer',
                                    title: 'Color Pattern Recognizer',
                                    description:
                                        'Recognizes color patterns and combinations.',
                                    function:
                                        'Enables the recognition of color-based object properties.',
                                    location: 'V4 (fourth visual area)',
                                },
                                {
                                    id: 'shapeAnalyzer',
                                    title: 'Shape Analyzer',
                                    description:
                                        'Analyzes the shape and form of objects.',
                                    function:
                                        'Enables the recognition of object shapes and contours.',
                                    location: 'Inferior temporal cortex',
                                },
                                {
                                    id: 'objectIdentifier',
                                    title: 'Object Identifier',
                                    description:
                                        'Identifies and recognizes specific objects.',
                                    function:
                                        'Enables the recognition and identification of familiar objects.',
                                    location: 'Inferior temporal cortex',
                                },
                            ],
                        },
                        {
                            id: 'faceRecognitionSpecialist',
                            title: 'Face Recognition Specialist',
                            description:
                                'Specializes in recognizing and identifying faces.',
                            function:
                                'Enables the recognition and identification of individual faces.',
                            location: 'Fusiform gyrus',
                            children: [
                                {
                                    id: 'facialFeatureExtractor',
                                    title: 'Facial Feature Extractor',
                                    description:
                                        'Extracts distinct facial features for recognition.',
                                    function:
                                        'Processes and extracts key facial features.',
                                    location: 'Fusiform face area',
                                },
                                {
                                    id: 'faceIdentityMatcher',
                                    title: 'Face Identity Matcher',
                                    description:
                                        'Matches facial features to stored face representations.',
                                    function:
                                        'Compares perceived faces with stored face memories.',
                                    location: 'Anterior temporal lobe',
                                },
                                {
                                    id: 'faceEmotionAnalyzer',
                                    title: 'Face Emotion Analyzer',
                                    description:
                                        'Analyzes facial expressions and emotional cues.',
                                    function:
                                        'Interprets emotional expressions from facial cues.',
                                    location: 'Superior temporal sulcus',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
